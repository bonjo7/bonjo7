import React from "react";
import styles from "./Bio.module.css";
import logo from "../../images/BT.png";

const Bio = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.AppLogo} alt='logo' />
    </div>
  );
};

export default Bio;
