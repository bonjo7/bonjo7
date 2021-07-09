import React from "react";
import Contact from "../Contact/Contact"
import styles from "./Bio.module.css";
import logo from "../../images/prime.jpeg";

const email = "bernardthompson83@gmail.com";
const tel = "+353 87 137 7303";

const Bio = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <img src={logo} className={styles.AppLogo} alt='bernard_thompson_profile_picture' />
      <p className={styles.name}>Bernard Thompson</p>
      <hr className={styles.hr}></hr>
      <p className={styles.title}>Software Developer</p>
    </div>
    <Contact email={email} tel={tel}/>
    </>
  );
};

export default Bio;
