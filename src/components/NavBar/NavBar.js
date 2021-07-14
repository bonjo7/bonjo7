import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { List } from "phosphor-react";
import styles from "./NavBar.module.css";

const navItems = [
  {
    id: 0,
    link: "/skills",
    linkName: "Skills",
  },
  {
    id: 1,
    link: "/experience",
    linkName: "Experience",
  },
  // {
  //   link: "/education",
  //   linkName: "Education",
  // },
];

const getUrl = window.location.pathname;

const NavBar = () => {
  return (
    <div className={styles.fullWidth}>
    <div className={styles.wrapper}>
    <Navbar className={styles.navBar} expand='lg'>
      <Navbar.Brand className={styles.link} href='/'>
        Bernard Thompson
      </Navbar.Brand>
      <Navbar.Toggle
        className={styles.hamburgerIcon}
        aria-controls='basic-navbar-nav'
      >
        <span>
          <List size={24} color='#ffffff' />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
        <Nav className="justify-content-end">
          {navItems.map((item) => {
            return (
              <Nav.Link key={item.id} className={getUrl === item.link ? styles.active : styles.link} href={item.link} >
                {item.linkName}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </div>
  );
};

export default NavBar;
