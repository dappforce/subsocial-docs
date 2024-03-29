import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Head from '@docusaurus/Head';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "./styles.module.css";
import { MenuCard } from "../components/MenuCard";
import Footer from '../components/Footer';
import menuItems from '../components/menu.json';
import SearchBar from "../theme/SearchBar";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const pickRandomImage = () => {
    const imageNumber = Math.floor(Math.random() * 3 + 1)
    return `/img/home/${imageNumber}.png`
  }

  return (
    <div className={styles.body}>
      <Head>
        <meta property="title" content="Subsocial Documentation" />
        <meta property="description" content="Learn about the web3 social protocol and join our developer ecosystem. Subsocial is a set of Substrate pallets that allows anyone to launch their own decentralized censorship-resistant social network. " />
        {/* <meta property="og:image" content="image.png" /> */}
      </Head>
      <div className={styles.parentLayout} title={`${siteConfig.title}`}>
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className={styles.container}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--primary button--lg"
                )}
                to={useBaseUrl("docs/develop/")}
              >
                Start Building
              </Link>
            </div>
          </div>
        </header>

        <div className="vignette">
          <img src={pickRandomImage()} className={styles.bgImg} />
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.bodyHeading}>
          <div className={styles.heading1}>
            Choose a Topic
          </div>
          <div className={styles.searchBox}>
            <SearchBar />
          </div>
        </div>
        <Row className={styles.row}>
          {menuItems.map((item) => {
            return <Col lg={12} md={6} sm={6} xs={12} key={item.title} className={styles.colItem}>
              <MenuCard item={item} />
            </Col>
          })}
        </Row>
      </div>
      <Footer />
    </div >
  );
}
