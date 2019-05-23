import React, { Component } from "react";

// import favicon from "./assets/img/assets/favicon.png";

// const siteUrl = "http://www.everpoint.ru";
// const ogImage = `${siteUrl}/img/ogImage.png`;

const googleMetrika = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-134915866-4');
`;

class HTML extends Component {
  render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      postBodyComponents,
      body,
    } = this.props;

    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Unknown</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic-ext"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/*<meta*/}
          {/*  name="keywords"*/}
          {/*  content="GIS, LOCATION INTELLIGENCE, MAPS, DATA ANALYTICS, DATA VISUALIZATION"*/}
          {/*/>*/}
          {/*<meta name="description" content="Разработчик геоинформационных систем и сервисов." />*/}
          {/*<meta property="og:title" content="Everpoint" />*/}
          {/*<meta property="og:url" content={siteUrl} />*/}
          {/*<meta property="og:image" content={ogImage} />*/}
          {/*<meta property="og:image:type" content="image/png" />*/}
          {/*<meta*/}
          {/*  property="og:description"*/}
          {/*  content="Разработчик геоинформационных систем и сервисов."*/}
          {/*/>*/}
          {/*<meta property="og:site_name" content="Everpoint" />*/}
          {/*<meta property="twitter:title" content="Everpoint" />*/}
          {/*<meta property="twitter:image:src" content={ogImage} />*/}
          {/*<meta*/}
          {/*  property="twitter:description"*/}
          {/*  content="Разработчик геоинформационных систем и сервисов."*/}
          {/*/>*/}
          <meta property="og:type" content="website" />
          {headComponents}
        </head>

        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
          {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-134915866-4" />*/}
          {/*<script*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: googleMetrika,*/}
          {/*  }}*/}
          {/*/>*/}
        </body>
      </html>
    );
  }
}

export default HTML;
