import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Card, Breadcrumb } from "react-bootstrap";
import { educationData } from "../../data";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to='/' href='/'>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Education</Breadcrumb.Item>
      </Breadcrumb>
      <Jumbotron fluid className={styles.background} role='main'>
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
                    <Card.Title>
                      {education.course}
                      <Card.Text className={styles.grade}>
                        {education.grade}
                      </Card.Text>
                      <Card.Text className={styles.cardText}>
                        {education.year}
                      </Card.Text>
                      <Card.Text className={styles.cardText}>
                        {education.name}
                      </Card.Text>
                      <Card.Text className={styles.cardText}>
                        {education?.address}
                      </Card.Text>

                      <Card.Text className={styles.cardText}>
                        {education.link ? (
                          <a
                            href={education?.link}
                            target='blank'
                            style={{ color: "#1d44b8" }}
                          >
                            Online Certificiate
                          </a>
                        ) : (
                          ""
                        )}
                      </Card.Text>
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </Jumbotron>
    </>
  );
};

export default Education;
