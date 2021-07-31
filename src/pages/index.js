import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <a target="_blank" href="https://github.com/tool3?tab=repositories"><>repositories</></a>,
    className: 'torquise',
    imageUrl: 'img/github.png',
    description: (
      <>
        see my open source github repositories.
      </>
    ),
  },
  {
    title: <a href="./docs/"><>services</></a>,
    className: 'pink',
    imageUrl: 'img/wrench.png',
    description: (
      <>
        see some of my server projects.
      </>
    ),
  },
  {
    title: <a target="_blank" href="mailto:talhayut.dev@gmail.com"><>contact</></a>,
    imageUrl: 'img/email.png',
    className: 'purple',
    description: (
      <>
        send me an email
      </>
    ),
  },
];

function Feature({ className, imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles[className]} src={imgUrl} alt={title} />
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
            <img src="../static/img/profile.png" width={200} height={200} />
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
              to={useBaseUrl('blog/')}>
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
                  <Feature className="feature" key={idx} {...props} idx={idx} />
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
