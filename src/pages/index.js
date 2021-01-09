import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Logo from '../../static/img/terminal.svg';

const features = [
  {
    title: 'shellfie',
    imageUrl: 'img/undraw_launch_day_4e04.svg',
    description: (
      <>
        the shellfie js library<br/>
        <a href="https://github.com/tool3/shellfie" target="_blank">shellfie</a>
      </>
    ),
  },
  {
    title: 'shellfied',
    imageUrl: 'img/undraw_Taken_if77.svg',
    description: (
      <>
        shellfie as a service<br/>
        <a href="https://shellfie.herokuapp.com" target="_blank">shellfied</a>
      </>
    ),
  },
  {
    title: 'shellfie-cli',
    imageUrl: 'img/undraw_To_the_stars_qhyy.svg',
    description: (
      <>
        use the power of shellfie in your terminal<br/>
        <a href="https://github.com/tool3/shellfie-cli" target="_blank">shellfie-cli</a>
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
