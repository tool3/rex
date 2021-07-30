import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
// import Logo from '../../static/img/cube.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from 'axios';

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
            <div className="title"><img src="../../static/img/profile.png" width={200} height={200} />{siteConfig.title}</div>
            <div className="description">{siteConfig.tagline}</div>
          </div>
        </div>
      </header>
    </Layout >
  );
}

export default Home;
