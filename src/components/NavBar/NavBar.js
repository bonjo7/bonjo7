import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { List } from "phosphor-react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.navBar} expand='lg'>
      <Navbar.Brand className={styles.link} href='/'>
        Bernard Thompson
      </Navbar.Brand>
      <Navbar.Toggle className={styles.hamburgerIcon} aria-controls='basic-navbar-nav'>
        <span>
          <List size={24} color='#ffffff' />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav' className={styles.link}>
        <Nav className='mr-auto'>
          <Nav.Link className={styles.link} href='/sidebar'>
            Skills
          </Nav.Link>
          <Nav.Link className={styles.link} href='#home'>
            Experience
          </Nav.Link>
          <Nav.Link className={styles.link} href='#link'>
            Education
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
