import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { List } from "phosphor-react";
import AboutModal from "../Modals/AboutModal";
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
  {
    id: 2,
    link: "/education",
    linkName: "Education",
  },
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <AboutModal handleClose={handleClose} show={show} />

      <div
        className={styles.fullWidth}
        role='navigation'
        id='navigation'
        aria-label='navigation'
      >
        <div className={styles.wrapper}>
          <Navbar className={styles.navBar} collapseOnSelect expand='lg'>
            <Navbar.Brand className={styles.link} as={Link} to='/' href={"/"}>
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
            <Navbar.Collapse
              id='basic-navbar-nav'
              className='justify-content-end'
            >
              <Nav className='justify-content-end'>
                {navItems.map((item) => {
                  return (
                    <Nav.Link
                      key={item.id}
                      className={styles.link}
                      as={Link}
                      to={item.link}
                      href={item.link}
                    >
                      {item.linkName}
                    </Nav.Link>
                  );
                })}
                <Nav.Link
                  key='000123'
                  className={styles.link}
                  onClick={handleShow}
                >
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default NavBar;
