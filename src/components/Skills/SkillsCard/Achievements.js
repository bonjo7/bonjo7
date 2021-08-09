import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Spinner from "../../Spinner/Spinner";
import { achievementSkills } from "../../../data";
import styles from "./SkillsCard.module.css";

const Achievements = () => {
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
            {achievementSkills.map((skill, key) => {
              return (
                <div key={key}>
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
        </Container>
      )}
    </Jumbotron>
  );
};

export default Achievements;
