import React from "react";
import Helmet from "react-helmet";

import config from "../../../content/meta/config";

export const Seo = (
  {
    postTitle,
    postDescription,
    postCover,
  }
) => {
  const title = postTitle ? postTitle : config.siteTitle;
  const description = postDescription ? postDescription : config.siteDescription;
  const image = postCover ? postCover : config.siteImage;

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#"
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={config.siteUrl + image} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="735" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};