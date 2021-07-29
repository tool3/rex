import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Logo from '../../static/img/logo.black.svg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from 'axios';

function Input() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true)
    try {
      const {data: {short_url}} = await axios.post('https://tsiny.herokuapp.com/shorten', {url});
      setShortUrl(short_url);
      setLoading(false);
      console.log(styles)
    } catch (error) {
      console.error(error)
    }
  }
  return (  
    <>
    <input className="url" type="url" value={url} onChange={(e) => setUrl(e.target.value)} /> 
    <div className={styles.buttons}>
    <a
      className={clsx(
        'button button--outline button--secondary button--lg button_shorten',
        styles.getStarted,
      )}
      onClick={handleClick}>
      Shorten
    </a>
  </div>
  <br />
  {loading ?  <Loader
        type="BallTriangle"
        color="#004888"
        height={70}
        width={70}
        timeout={3000} //3 secs
      /> : <a className="shortUrl" href={shortUrl} target={"_blank"}>{shortUrl}</a>}
  </>
  )
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
          <Input />
        </div>
      </header>
    </Layout >
  );
}

export default Home;
