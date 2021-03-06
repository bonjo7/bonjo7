import React, { useState, useEffect } from "react";
import { CaretDown } from "phosphor-react";
import { Jumbotron, Container, Accordion, Card, Button } from "react-bootstrap";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import Spinner from "../Spinner/Spinner";
import { experienceData } from "../../data";
import styles from "./Experience.module.css";

const Experience = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);
  return (
    <>
      <Breadcrumbs currentPage='Experience' />
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
            <Accordion className={styles.accordian}>
              {experienceData.map((exp, key) => {
                return (
                  <Card key={key}>
                    <Card.Header className={styles.accordian}>
                      <Accordion.Toggle
                        className={styles.headerName}
                        as={Button}
                        variant='link'
                        eventKey={exp.id}
                      >
                        <div className={styles.wrapper} key={key}>
                          <div className={styles.imgDiv}>
                            <img
                              src={exp.image}
                              className={styles.image}
                              alt={`${exp.companyName} company logo`}
                            />{" "}
                          </div>
                          <div className={styles.name}>
                            {exp.companyName}
                            <div className={styles.year}>{exp.year}</div>
                          </div>
                          <div className={styles.caret}>
                            <CaretDown size={20} />
                          </div>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={exp.id}>
                      <Card.Body>
                        {exp?.positionHeld?.map((position, key) => {
                          return (
                            <div key={key} className={styles.wrapper}>
                              <div>
                                <ul key={key} style={{ listStyleType: "none" }}>
                                  <li
                                    key={key}
                                    style={{ fontStyle: "italic" }}
                                  >{`${position.date}:`}</li>
                                </ul>
                              </div>
                              <div>
                                <ul key={key} style={{ listStyleType: "none" }}>
                                  <li key={key} style={{ fontWeight: "bold" }}>
                                    {position.title}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        })}

                        <h5>
                          {exp?.responsibilities ? "Responsibilities" : ""}
                        </h5>
                        <div className={styles.responsibilities}>
                          {exp?.responsibilities?.map(
                            (responsibilities, key) => {
                              return (
                                <ul key={key}>
                                  <li key={key}>{responsibilities}</li>
                                </ul>
                              );
                            }
                          )}
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </Container>
        )}
      </Jumbotron>
    </>
  );
};

export default Experience;
