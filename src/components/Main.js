import React from "react";
import styles from "./Main.module.css"
import logo from "../images/Doge.png";

const MainPage = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt='logo' />
        <p>
          <b>Much WOW - </b>DF7QpRhieXw6KE6QXzy9W2rk3u4nNZPgNw
        </p>
      </header>
    </div>
  );
};

export default MainPage;
