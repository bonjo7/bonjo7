import React, { useState } from "react";
import { useAuth } from "../../Hooks/AuthContext";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { User, SignOut, FilePlus } from "phosphor-react";
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
  const { currentUser, setCurrentUser } = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const history = useHistory();

  const handleShow = () => {
    setShow(true);
  };

  const logout = async (e) => {
    localStorage.removeItem("isLoggedIn");
    localStorage.clear();
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <>
      <AboutModal handleClose={handleClose} show={show} />

      <div
        className={styles.fullWidth}
        role='navigation'
        id='navigation'
        aria-label='main navigation'
      >
        <div className={styles.wrapper}>
          <Link className={styles.skipLink} to='#landing-page'>
            {" "}
            Skip to main content{" "}
          </Link>
          <Navbar className={styles.navBar} collapseOnSelect expand='lg'>
            <Navbar.Brand className={styles.link} as={Link} to='/' href='/'>
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
                <Nav.Link key='3' className={styles.link} onClick={handleShow}>
                  About
                </Nav.Link>
                {currentUser && <Nav.Link
                key='4'
                className={styles.link}
                as={Link}
                to='/settings'
                href='/settings'
                >
                  <FilePlus size={20} color="#ffffff" />
                  </Nav.Link>}
                <Nav.Link
                  key='5'
                  className={styles.link}
                  as={Link}
                  to='/login'
                  href='/login'
                  onClick={logout}
                >
                  {currentUser ? (
                    <SignOut size={20} color='#ffffff' />
                  ) : (
                    <User size={20} color='#ffffff' />
                  )}
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
