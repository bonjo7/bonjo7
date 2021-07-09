import React, { useState } from "react";
import styles from "./Skills.module.css"
import Tech from "./SkillsCard/Tech";
import Social from "./SkillsCard/Social";
import { Nav } from "react-bootstrap";

const Skills = () => {
    const [tabItem, setTabItem] = useState("tech-skills");

  return (
      <>
    <Nav variant='tabs' defaultActiveKey='tech-skills'>
      <Nav.Item >
        <Nav.Link className={styles.item} eventKey='tech-skills' onClick={() => setTabItem('tech-skills')} >Technical Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={styles.item} eventKey='social-skills' onClick={() => setTabItem('social-skills')  } >Social Skills</Nav.Link>
      </Nav.Item>
    </Nav>
    <div>{tabItem === 'tech-skills' ? <Tech/> : <Social />}</div>
    </>
  );
};

export default Skills;
