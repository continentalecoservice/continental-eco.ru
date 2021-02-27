import React, { FC } from "react";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

interface SEOProps {
  lang?: string
  postTitle: string
  postDescription: string
  postCover: string
  postSlug: string
}

const Seo: FC<SEOProps> = (
  {
    postTitle,
    postDescription,
    postCover,
    postSlug
  }
) => {
  const title = postTitle ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const description = postDescription ? postDescription : config.siteDescription;
  const image = postCover ? postCover : config.siteImage;
  const url = config.siteUrl + config.pathPrefix + postSlug;

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
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={config.siteUrl + image} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="735" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export { Seo };
