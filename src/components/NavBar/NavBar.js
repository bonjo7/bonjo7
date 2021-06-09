import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.navBar} variant="light">
      <Navbar.Brand className={styles.link} href='/'>Bernard Thompson</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
        <Nav.Link className={styles.link} href='/sidebar'>Skills</Nav.Link>
          <Nav.Link className={styles.link} href='#home'>Experience</Nav.Link>
          <Nav.Link className={styles.link} href='#link'>Education</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
