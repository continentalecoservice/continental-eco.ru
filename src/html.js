import React from 'react';
import PreloaderSVG from './images/svg/preloader.svg';

import './preloader.css';

const HTML = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
        <meta name="apple-mobile-web-app-title" content="Lazywill" />
        <meta name="google-site-verification" content="NJ79ZVgVfMEQ3JvCfYsGmJhQyjEf62QNx02dgtxgWfc" />
        <meta name="yandex-verification" content="76c6ad6fd174e13b" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@300;400;600&family=Roboto+Slab:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        <div key={`preloader`} id="preloader-container">
          <div id='preloader'>
            <div className='preloader-wrap'>
              <div className='circle'></div>
            </div>
            <PreloaderSVG className='svg-icon' />
          </div>
        </div>
        {props.postBodyComponents}
      </body>
    </html>
  );
}

export default HTML;