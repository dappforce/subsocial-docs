import React from 'react';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./menu.module.css";

export const MenuCard = ({ item }) => {
  const { img, title, description, link } = item

  return <Link className={styles.link} to={useBaseUrl(link)}>
    <div className={styles.menuCard}>
      <div>
        <img className={styles.img} src={`/img/home/${img}.png`} />
      </div>

      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  </Link>
}