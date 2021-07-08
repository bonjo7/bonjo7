import React from "react";
import Social from "../Social/Social"
import { Envelope, Phone } from "phosphor-react";
import styles from "./Contact.module.css";

const Contact = (props) => {
  const { email, tel } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        <div className={styles.icon}>
          <Envelope size={25} color="#1d44b8" />
        </div>
        <div>
          <a href='mailto:bernardthompson83@gmail.com'>{email}</a>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.icon}>
          <Phone size={25} color="#1d44b8" />
        </div>
        <div>
          <a href='tel:+353-87-137-7303'>{tel}</a>
        </div>
      </div>
      <div className={styles.socialComponent}>
        <Social />
      </div>
    </div>
  );
};

export default Contact;
