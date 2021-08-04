/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Skills.module.css";
import Tech from "./SkillsCard/Tech";
import Social from "./SkillsCard/Social";
import Achievements from "./SkillsCard/Achievements";
import { Nav, Breadcrumb } from "react-bootstrap";

const Skills = () => {
  const [tabItem, setTabItem] = useState("tech-skills");

  const tabItems = [
    {
      id: 0,
      tabItem: "tech-skills",
      tabName: "Technical Skills",
    },
    {
      id: 1,
      tabItem: "personal-skills",
      tabName: "Personal Skills",
    },
    {
      id: 2,
      tabItem: "achievements",
      tabName: "Achievements & Interests",
    },
  ];

  return (
    <>
      <Breadcrumb>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <Breadcrumb.Item active>
          <span style={{ color: "#687078", marginLeft: "5px" }}><h1 style={{fontSize: "16px", marginTop: "-21.5px", marginLeft: "5px"}}>/ Skills</h1></span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Nav
        variant='tabs'
        defaultActiveKey='tech-skills'
        aria-label='skills navigation'
        role='navigation'
        id='landing-page'
      >
        {tabItems.map((item, key) => {
          return (
            <Nav.Item key={key}>
              <Nav.Link
                className={styles.item}
                eventKey={item.tabItem}
                onClick={() => setTabItem(item.tabItem)}
              >
                {item.tabName}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
      <div>
        {tabItem === "tech-skills" ? (
          <Tech />
        ) : tabItem === "personal-skills" ? (
          <Social />
        ) : (
          <Achievements />
        )}
      </div>
    </>
  );
};

export default Skills;
