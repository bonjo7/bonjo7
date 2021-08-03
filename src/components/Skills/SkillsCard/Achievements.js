import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { achievementSkills } from "../../../data";
import styles from "./SkillsCard.module.css";

const Achievements = () => {
  return (
    <Jumbotron fluid className={styles.background} role='main'>
      <Container>
        <div className={styles.wrapper}>
          {achievementSkills.map((skill, key) => {
            return (
              <div key={key}>
                <h5 className={styles.title}>{skill.title}</h5>
                <div className={styles.listStyle}>
                  <ul>
                    {skill.skill.map((s, key) => {
                      return <li key={key}>{s}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Achievements;
