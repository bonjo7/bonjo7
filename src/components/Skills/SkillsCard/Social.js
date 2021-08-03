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
            return (
              <div key={key} className={styles.listSocialWrapper}>
                <h5 className={styles.title}>{skill.title}</h5>
                <ul>
                  {skill.skill.map((s, key) => {
                    return <li key={key}>{s}</li>;
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
            Prior and post my tech career I have had a number of opportunities
            to practice and enhance my leadership, organisational and time
            management skills. I completed my BSc in Information Technology and
            HDip in computer science part time (by night) while also working
            full time. This required me to organise, prioritise and manage my
            time to ensure I could complete both courses to the highest standard
            while also fulfilling my work and allowing time to spend with my
            family.
          </p>
          <p>
            Throughout my career I have shown the ability to multitask and
            prioritise my work. During my time at Waterford Airport I was
            involved in a number of different roles to ensure the safe arrival
            and departure of aircraft. Throughout my time at Red Hat I have had
            to work on multiple projects at one time where I would be required
            to prioritise and re prioritise my work based on customer needs and
            expectations.
          </p>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Social;
