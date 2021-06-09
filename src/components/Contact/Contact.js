import React from "react";
import styles from "./Contact.module.css";

const Contact = (props) => {

    const { email, tel } = props;
  return (
    <div className={styles.wrapper}>
     <span>{email}</span>
     <span>{tel}</span>
    </div>
  );
};

export default Contact;
