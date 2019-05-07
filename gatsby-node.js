const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      recipes: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "recipes" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            html
            frontmatter {
              templateKey
              country
              name
              image
              category
              ingredients
              steps {
                title
                step
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const recipes = result.data.recipes.edges;

    recipes.forEach(edge => {
      const data = {
        ...edge.node.frontmatter,
        id: edge.node.id,
      };

      const slug = edge.node.fields.slug;

      createPage({
        path: slug,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        // additional data can be passed via context
        context: {
          ...data,
          content: edge.node.html,
          link: slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, getConfig, actions: { replaceWebpackConfig } }) => {
  const config = getConfig();

  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }

  if (stage === "build-javascript") {
    const app = typeof config.entry.app === "string" ? [config.entry.app] : config.entry.app;

    config.entry.app = ["@babel/polyfill", ...app];
    replaceWebpackConfig(config);
  }
};
