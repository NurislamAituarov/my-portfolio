import { Home } from '@/layout/home/Home';
import { IPropsHome } from '@/types/interface';
import { API_URL } from '@/utils/constants';
import axios from 'axios';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage(props: IPropsHome) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const { data: links } = await axios.get(`${API_URL}/links`);
  const { data: me } = await axios.get(`${API_URL}/me`);

  return {
    props: {
      links,
      me,
    },

    revalidate: 60,
  };
}
