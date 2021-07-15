import React from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import { educationData } from "../../data";
import styles from "./Education.module.css";

const Education = () => {
  return (
      <Jumbotron fluid className={styles.background}>
        <Container>
          {educationData.map((education, key) => {
            return (
              <Card key={key} className={styles.card}>
                <Card.Body>
                  <div className={styles.wrapper}>
                    <div className={styles.imgWrapper}>
                      <img
                        src={education.image}
                        className={styles.img}
                        alt={`${education.name}s logo`}
                      />
                    </div>
                    <div>
                      <Card.Title>
                        <div>{education.course}</div>
                        <div className={styles.grade}>{education.grade}</div>
                      </Card.Title>
                      <Card.Text className={styles.cardText}>
                        <div>{education.year}</div>
                        <div>{education.name}</div>
                        <div>{education?.address}</div>
                        <div>
                          <a href={education?.link} target='blank'>
                            Online Certificiate
                          </a>
                        </div>
                      </Card.Text>
                      {/* <Button variant='link'>Go somewhere</Button> */}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </Jumbotron>
  );
};

export default Education;
