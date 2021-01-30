import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Logo from '../../static/img/restory_black.svg';

const features = [
  {
    title: 'standalone',
    imageUrl: 'img/undraw_launch_day_4e04.svg',
    description: (
      <>
        restory uses it's own dist of git-filter-repo.<br/>
        therefore you do not need to have it in order to enjoy the benefits.
      </>
    ),
  },
  {
    title: 'simple api',
    imageUrl: 'img/undraw_hologram_fjwp.svg',
    description: (
      <>
        restory provides a simple api abstraction to make rewriting history as simple as possible.
      </>
    ),
  },
  {
    title: 'super fast',
    imageUrl: 'img/undraw_To_the_stars_qhyy.svg',
    description: (
      <>
        git-filter-repo is extremely fast compared to git filter-branch.
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
