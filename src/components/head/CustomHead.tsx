import Head from 'next/head';
import favicon from '../../../public/favicon.ico';

const CustomHead = () => (
  <Head>
    <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
  </Head>
);

export default CustomHead;
