import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Card, Breadcrumb } from "react-bootstrap";
import { educationData } from "../../data";
import Spinner from "../Spinner/Spinner";
import styles from "./Education.module.css";

const Education = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      <>
        <Breadcrumb>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <Breadcrumb.Item active>
            <span style={{ color: "#687078", marginLeft: "5px" }}>
              <h1
                style={{
                  fontSize: "16px",
                  marginTop: "-21.5px",
                  marginLeft: "5px",
                }}
              >
                / Education
              </h1>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Jumbotron
          fluid
          className={styles.background}
          role='main'
          id='landing-page'
        >
          {loading ? (
            <Spinner />
          ) : (
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
                        <div className={styles.textWrapper}>
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
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </Container>
          )}
        </Jumbotron>
      </>
    </>
  );
};

export default Education;
