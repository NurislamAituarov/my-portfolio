import { Home } from '@/layout/home/Home';
import { httpClient } from '@/services/api';
import { IPropsHome } from '@/types/interface';
import { API_URL } from '@/utils/constants';
import { links } from './api/links';
import { me } from './api/me';

export default function HomePage(props: IPropsHome) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  console.log(API_URL);
  // const { data: links } = await httpClient.get(`${API_URL}/links`);
  // const { data: me } = await httpClient.get(`${API_URL}/me`);
  return {
    props: {
      links,
      me,
    },

    revalidate: 60,
  };
}
