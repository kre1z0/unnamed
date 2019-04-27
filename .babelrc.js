const isDev = process.env.NODE_ENV === "development";

const targets = {
  ie: 11,
  edge: 14,
  firefox: 45,
  chrome: 49,
  safari: 10,
};

const presets = [
  [
    "babel-preset-gatsby",
    {
      targets,
      useBuiltIns: "usage",
      modules: false,
    },
  ],
];

module.exports = {
  plugins: [["babel-plugin-styled-components", { displayName: isDev }]],
  presets,
};
