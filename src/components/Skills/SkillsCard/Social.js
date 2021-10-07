import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Spinner from "../../Spinner/Spinner";
import { softSkills } from "../../../data";
import styles from "./SkillsCard.module.css";

const Social = () => {
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
            {softSkills.map((skill, key) => {
              return (
                <div key={key} className={styles.listSocialWrapper}>
                  <div className={styles.listStyle}>
                    <p className={styles.title}>{skill.title}</p>
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
              I have had a number of opportunities to practice and enhance my
              leadership, organisational and time management skills. I completed
              my BSc in Information Technology and HDip in computer science part
              time (by night) while also working full time. This required me to
              organise, prioritise and manage my time to ensure I could complete
              both courses to the highest standard while also fulfilling my work
              and allowing time to spend with my family.
            </p>
            <p>
              Throughout my career I have shown the ability to multitask and
              prioritise my work. During my time at Waterford Airport I was
              involved in a number of different roles to ensure the safe arrival
              and departure of aircraft. In my role at Red Hat I work on
              multiple projects at one time where I am required to prioritise
              and re prioritise my work based on customer needs and
              expectations.
            </p>
            <p>
              I handle these customer expectations by using agile practices such
              as and not limited to, iterative development, attending daily scum
              meetings, sprint planning sessions, sprint retrospective's,
              customer demonstrations.
            </p>
            <p>
              As I have delivered projects within small to large teams both on
              site and remotely, this has allowed me to knowledge share with
              colleagues and customer development teams, embrace new ways of
              working, communicate through various forms such as, face to face,
              telephone, video chat and instant messenger.
            </p>
          </div>
        </Container>
      )}
    </Jumbotron>
  );
};

export default Social;
