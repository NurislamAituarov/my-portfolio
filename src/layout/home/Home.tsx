import { IPropsHome } from '@/types/interface';
import cn from './Home.module.scss';
import { MetaTitle } from '@/components/meta-title/MetaTitle';
import { AboutMe } from '../about-me/AboutMe';
import { Grid } from '../grid/Grid';
import { Circles } from '@/components/circles/Circles';
import Particles from 'react-tsparticles';
import { useCallback, useEffect } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { CONFIGURE_PARTICLES } from '@/utils/constants';

export function Home({ links, me }: IPropsHome) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <section className={cn.section}>
      <MetaTitle title="My portfolio | Все полезные ссылки тут" />
      <div className={cn.container}>
        <AboutMe me={me} />
        <Grid links={links} />
      </div>
      <Circles />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={CONFIGURE_PARTICLES}
      />
    </section>
  );
}
