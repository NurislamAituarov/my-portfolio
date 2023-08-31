import { IPropsHome } from '@/types/interface';
import cn from './Home.module.scss';
import { MetaTitle } from '@/components/meta-title/MetaTitle';
import { AboutMe } from '../about-me/AboutMe';
import { Grid } from '../grid/Grid';
import { Circles } from '@/components/circles/Circles';

export function Home({ links, me }: IPropsHome) {
  return (
    <section className={cn.section}>
      <MetaTitle title="RED Links | Все полезные ссылки тут" />
      <div className={cn.container}>
        <AboutMe me={me} />
        <Grid links={links} />
      </div>

      <Circles />
    </section>
  );
}
