import React, { useState } from "react";
import { Dropdown, Jumbotron, Container, Card } from "react-bootstrap";
import { useAuth } from "../../Hooks/AuthContext";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import UploadExpereince from "../Experience/UploadExperience";
import UploadEducation from "../Education/UploadEducation";
import styles from "../Experience/Experience.module.css";

const Settings = () => {
  const [value, setValue] = useState();
  const { currentUser } = useAuth();

  const onChange = (e) => {
    if (e === "experience") {
      setValue("experience");
    } else if (e === "education") {
      setValue("education");
    }
  };

  const renderComponent = () => {
    if (value === "experience") {
      return <UploadExpereince />;
    } else if (value === "education") {
      return <UploadEducation />;
    }
  };
  return (
    <>
      <Breadcrumbs currentPage='Settings' />
      <Jumbotron
        fluid
        className={styles.background}
        role='main'
        id='landing-page'
      >
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Welcome {currentUser}</Card.Title>
              <Card.Text>
                Here within the settings page you can add new data such as a new
                job, new education, new skills. Select from the dropdown below
                to obtain the correct input form
              </Card.Text>
              <Dropdown>
                <Dropdown.Toggle
                  id='dropdown-button-dark-example1'
                  variant='secondary'
                >
                  Select what data you wish to add
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey='experience' onSelect={onChange}>
                    Upload Experience
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='education' onSelect={onChange}>
                    Upload Education
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Container style={{ marginTop: "30px" }}>
            {renderComponent()}
          </Container>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Settings;
