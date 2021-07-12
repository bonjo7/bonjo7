import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { techSkills } from "../../../data";
import styles from "./SkillsCard.module.css";

const Tech = () => {
  return (
    <Jumbotron fluid className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          {techSkills.map((skill, key) => {
            return (
              <div key={key} className={styles.listWrapper}>
                <h5 className={styles.title}>{skill.title}</h5>
                <ul>
                  {skill.skill.map((s) => {
                    return <li>{s}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <hr className={styles.hr}></hr>
        <div className={styles.experience}>
          <h5 className={styles.title}>Experience</h5>
          <p>
            Throughout my role as an AppDev Consultant, I have been engaging
            with customers in order to build, refactor and maintain web and
            mobile applications that are built using ReactJS, HTML, CSS, Kotlin
            and Swift while using NodeJS for backend applications.
          </p>
          <p>
            These applications are then containerized and deployed on Red Hat
            OpenShift using CI/CD Jenkins pipelines which deploy the
            applications across various environments.
          </p>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Tech;
