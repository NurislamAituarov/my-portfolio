import { useCallback, useEffect } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import { useMediaQuery } from 'react-responsive';

import { IPropsHome } from '@/types/interface';
import { MetaTitle } from '@/components/meta-title/MetaTitle';
import { Circles } from '@/components/circles/Circles';
import { CONFIGURE_PARTICLES } from '@/utils/constants';
import { Context } from '@/utils/context';
import { AboutMe } from '../about-me/AboutMe';
import { Grid } from '../grid/Grid';
import styles from './Home.module.scss';

export function Home({ links, me }: IPropsHome) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <Context.Provider value={links}>
      <section className={styles.section}>
        <MetaTitle title="My portfolio | Все полезные ссылки тут" />
        <div className={styles.container}>
          <AboutMe me={me} />
          <Grid links={links} />
        </div>
        <Circles />
        {!isMobile && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={CONFIGURE_PARTICLES}
          />
        )}
      </section>
    </Context.Provider>
  );
}
