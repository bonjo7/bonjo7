import React, { useEffect } from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import UseRoutes from "../../Hooks/RoutesHook";
import Spinner from "../Spinner/Spinner";
import styles from "./Education.module.css";

const Education = () => {
  const { loading, education, getEducationData } = UseRoutes();

  useEffect(() => {
    getEducationData();
  }, []);

  return (
    <>
      <Breadcrumbs currentPage='Education' />
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
            {education?.map((education, key) => {
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
  );
};

export default Education;
