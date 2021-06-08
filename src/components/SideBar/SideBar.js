import React from "react";
import styles from "./SideBar.module.css"
import {Envelope, Phone} from "phosphor-react"
import Contact from "./Contact"
import logo from "../../images/Doge.png";

const SideBar = () => {

    const email = "Email: bernardthompson83@gmail.com"
    const tel = "Tel: + 353 87 137 7303"
  return (
    
    <div className={styles.wrapper}>
    <img src={logo} className={styles.AppLogo} alt='logo' />
    <p>
      Bernard Thompson
    </p>
    <Contact email={email} tel={tel}/>
</div>
  );
};

export default SideBar;
