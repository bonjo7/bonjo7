import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { softSkills } from "../../../data";
import styles from "./SkillsCard.module.css";

const Social = () => {
    
  return (
    <Jumbotron fluid className={styles.background}>
    <Container>
    <div className={styles.wrapper}>
            {softSkills.map((skill, key) => {
              return(
               <div key={key} className={styles.listSocialWrapper}>
              <h5 className={styles.title}>{skill.title}</h5>
              <ul>
                {skill.skill.map((s, key)=> {
                  return(<li key={key}>{s}</li>)
                })}
              </ul>
              </div>
              )
            })}
        </div>
        <hr className={styles.hr}></hr>
        <div className={styles.experience}>
          <h5 className={styles.title}>Experience</h5>
          <p>
            ToDo
          </p>
          <p>
            ToDo
          </p>
        </div>
    </Container>
  </Jumbotron>
  );
};

export default Social;