
import React, { useState } from 'react';
import { FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa';
import Link from "@docusaurus/Link";

import styles from "../pages/styles.module.css";

const EMAIL_NEWSLETTER_SUBSCRIPTION = 'https://api.subsocial.network/mail/add_email/796340'

const Footer = () => {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const subscribe = () => {
    if (loading) return;

    if(!validateEmail(email)) {
      alert('Invalid email for subscription.')
      return;
    }

    setLoading(true);
    fetch(EMAIL_NEWSLETTER_SUBSCRIPTION, {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data['result'] === true) {
          alert('Thanks for joining our newsletter.');
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert(e.message);
      }).finally(() => {
        setEmail('');
        setLoading(false);
      });
  }

  return <div className={styles.footer}>
    <div className={styles.contactus}>
      Connect with us
      <div className={styles.socialIconsContainer}>
        <Link className={styles.socialIcon} to={"https://github.com/dappforce"}><FaGithub /></Link>
        <Link className={styles.socialIcon} to={"https://t.me/+ZzvLu0ZfkQwxNGQy"}> <FaTelegram /></Link>
        <Link className={styles.iconCover} to={"https://discord.gg/w2Rqy2M"}>
          <FaDiscord style={{ color: '#fff' }} />
        </Link>
      </div>
    </div>
    <div className={styles.copyright}>
      {new Date().getFullYear()} Subsocial. All Rights Reserved.
    </div>
    <div className={styles.newsletter}>
      Subsocial Newsletter
      <div className={styles.form}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.emailInput} type="email" placeholder="example@gmail.com" />
        <div onClick={subscribe} className={styles.subscribeBtn}>{loading ? 'Loading' : 'Subscribe'}</div>
      </div>
    </div>
  </div>
}

export default Footer
