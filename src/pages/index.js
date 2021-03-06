import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Logo from '../../static/img/logo.black.svg';

const features = [
  {
    title: <><b>R</b>eliable</>,
    imageUrl: 'img/undraw_launch_day_4e04.svg',
    description: (
      <>
        Seperate pages by HTML comments supplying metadata that will be used to structure your docs.
      </>
    ),
  },
  {
    title: <><b>E</b>asy</>,
    imageUrl: 'img/undraw_Taken_if77.svg',
    description: (
      <>
        With a single <code>.js</code> script, turn your README into beautiful docs site.
      </>
    ),
  },
  {
    title: <><b>X</b>tendable</>,
    imageUrl: 'img/undraw_To_the_stars_qhyy.svg',
    description: (
      <>
        Extend or customize your website layout using React.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="heading">
            <Logo width={200} height={100} />
            <div className="title">{siteConfig.title}</div>
            <div className="description">{siteConfig.tagline}</div>
          </div>
          <br />
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout >
  );
}

export default Home;
