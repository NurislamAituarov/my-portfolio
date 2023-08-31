import Head from 'next/head';

interface ITitleProps {
  title: string;
}

export function MetaTitle({ title }: ITitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
