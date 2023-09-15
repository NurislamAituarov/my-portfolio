import { Html, Head, Main, NextScript } from 'next/document';
import favicon from '../public/favicon.ico';
import CustomHead from '@/components/head/CustomHead';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <CustomHead />
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}
