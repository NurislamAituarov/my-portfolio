import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const pathFavicon =
    process.env.NODE_ENV === 'development' ? '/favicon.ico' : '/my-portfolio/favicon.ico';

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={pathFavicon} sizes="any" />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}
