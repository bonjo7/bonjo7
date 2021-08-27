import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { techSkills } from "../../../data";
import Spinner from "../../Spinner/Spinner";
import styles from "./SkillsCard.module.css";

const Tech = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <Jumbotron fluid className={styles.background} role='main'>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <div className={styles.wrapper}>
            {techSkills.map((skill, key) => {
              return (
                <div key={key} className={styles.listWrapper}>
                  <p className={styles.title}>{skill.title}</p>
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
          <hr className={styles.hr}></hr>
          <div className={styles.experience}>
            <p className={styles.title}>Experience</p>
            <p>
              Throughout my role as a Consultant, I have been engaging with
              customers in order to build, refactor and maintain web and mobile
              applications that are built using ReactJS, HTML, CSS, Kotlin and
              Swift while using NodeJS for backend applications while storing
              application data via mongoDB.
            </p>
            <p>
              The work requires to refactor older applications ensuring they
              conform with accessibility standards. Adding new and enhancing
              current features, while also documenting application functionality
              while ensuring the customer needs are always meet.
            </p>
            <p>
              These applications are then containerized and deployed on Red Hat
              OpenShift using CI/CD Jenkins pipelines which deploy the
              applications across various environments.
            </p>
          </div>
        </Container>
      )}
    </Jumbotron>
  );
};

export default Tech;
