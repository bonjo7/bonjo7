import React from "react";
import {
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  MediumLogo,
} from "phosphor-react";
import styles from "../Contact/Contact.module.css";

const Social = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        <div className={styles.socialIcon}>
          <a
            href='https://github.com/bonjo7'
            target='_blank'
            rel='noreferrer'
            aria-label='Bernard Thompson GitHub URL'
          >
            <GithubLogo size={55} color='#1d44b8' />
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a
            href='https://www.linkedin.com/in/bernardthompson83/'
            target='_blank'
            rel='noreferrer'
            aria-label='Bernard Thompson LinkedIn URL'
          >
            <LinkedinLogo size={55} color='#1d44b8' />
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a
            href='https://twitter.com/bonjo7'
            target='_blank'
            rel='noreferrer'
            aria-label='Bernard Thompson Twitter URL'
          >
            <TwitterLogo size={55} color='#1d44b8' />
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a
            href='https://medium.com/@bethomps'
            target='_blank'
            rel='noreferrer'
            aria-label='Bernard Thompson Medium URL'
          >
            <MediumLogo size={55} color='#1d44b8' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
