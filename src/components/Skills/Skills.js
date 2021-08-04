/* eslint-disable array-callback-return */
import React, { useState } from "react";
import styles from "./Skills.module.css";
import Tech from "./SkillsCard/Tech";
import Social from "./SkillsCard/Social";
import Achievements from "./SkillsCard/Achievements";
import { Nav } from "react-bootstrap";

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
      <Nav
        variant='tabs'
        defaultActiveKey='tech-skills'
        aria-label='skills navigation'
        role='navigation'
        style={{ marginBottom: "-13px" }}
        id="landing-page"
      >
        {tabItems.map((item, key) => {
          return (
            <Nav.Item key={key}>
              <Nav.Link
                className={styles.item}
                eventKey={item.tabItem}
                onClick={() => setTabItem(item.tabItem)}
              >
                {tabItem === item.tabItem ? (
                  <h1 style={{ fontSize: "16px" }}>{item.tabName}</h1>
                ) : (
                  <p>{item.tabName}</p>
                )}
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
