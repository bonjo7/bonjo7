import React, { useState, useEffect, useRef } from "react";
import UseRoutes from "../../Hooks/RoutesHook";
import Spinner from "../Spinner/Spinner";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import styles from "../Experience/Experience.module.css";

const Test = () => {
  const ref = useRef();
  const [enable, setEnable] = useState(false);
  const [educationStatus, setEducationStatus] = useState();
  const [fileData, setFileData] = useState();
  const [formData, setFormData] = useState({});
  const { loading, postEducationData } = UseRoutes();

  useEffect(() => {}, [loading]);

  const formValidation = () => {
    const { name, address, course, startDate, finishDate, grade, link } =
      formData;

    if (
      name &&
      name !== "" &&
      address &&
      address !== "" &&
      course &&
      course !== "" &&
      startDate &&
      startDate !== "" &&
      finishDate &&
      finishDate !== "" &&
      fileData &&
      fileData.name !== ""
    ) {
      setEnable(true);
    }
  };

  useEffect(() => {
    formValidation();
  }, [formData, fileData]);

  const education = () => {
    educationStatus ? setEducationStatus(false) : setEducationStatus(true);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilechange = (e) => {
    setFileData(e.target.files[0]);
  };

  const generateFormDataForUpload = () => {
    const completeFormData = new FormData();
    completeFormData.append("name", formData.name);
    completeFormData.append("address", formData.address);
    completeFormData.append("course", formData.course);
    completeFormData.append("startDate", formData.startDate);
    completeFormData.append("finishDate", formData.finishDate);
    completeFormData.append("image", fileData);
    if (!educationStatus) {
      completeFormData.append("grade", formData.grade);
      completeFormData.append("link", formData.link);
    }

    postEducationData(completeFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    generateFormDataForUpload();
    ref.current.value = "";
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Form>
            <Card className={styles.section}>
              <Card.Body>
                <Card.Title>Education details</Card.Title>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <Form.Check
                        className={styles.checkbox}
                        type='checkbox'
                        label='If you are currently enrolled in this educaiton, please check the checkbox to set fields correctly'
                        onClick={(e) => {
                          education(e);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Institute Name</Form.Label>
                      <Form.Control
                        name='name'
                        type='text'
                        placeholder='Enter institute name'
                        onChange={(e) => onChange(e)}
                      />
                      <Form.Text className='text-muted'>
                        eg. Waterford Institute of technology
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='formFile' className='mb-3'>
                      <Form.Label>Institute Logo</Form.Label>
                      <Form.Control
                        type='file'
                        name='file'
                        accept='image/*'
                        onChange={(e) => handleFilechange(e)}
                        placeholder='upload image'
                        ref={ref}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Institute Address</Form.Label>
                  <Form.Control
                    name='address'
                    type='text'
                    placeholder='Enter institute address'
                    onChange={(e) => onChange(e)}
                  />
                  <Form.Text className='text-muted'>
                    eg. Cork Road, Waterford, Ireland
                  </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Course Title</Form.Label>
                  <Form.Control
                    name='course'
                    type='text'
                    placeholder='Enter course title'
                    onChange={(e) => onChange(e)}
                  />
                  <Form.Text className='text-muted'>
                    eg. HDip in Computer Science
                  </Form.Text>
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Strat Date</Form.Label>
                      <Form.Control
                        name='startDate'
                        type='date'
                        placeholder='dd/mm/yyyy'
                        onChange={(e) => onChange(e)}
                      />
                      <Form.Text className='text-muted'>
                        eg. dd/mm/yyyy
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Finish Date</Form.Label>
                      <Form.Control
                        name='finishDate'
                        type={educationStatus ? "text" : "date"}
                        placeholder={educationStatus ? "Present" : "dd/mm/yyyy"}
                        onChange={(e) => onChange(e)}
                      />
                      <Form.Text className='text-muted'>
                        eg. {educationStatus ? "Present" : "dd/mm/yyy"}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                {!educationStatus && (
                  <>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Grade</Form.Label>
                      <Form.Control
                        name='grade'
                        type='text'
                        placeholder='Enter grade'
                        onChange={(e) => onChange(e)}
                      />
                      <Form.Text className='text-muted'>
                        eg. Distinction
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Link to certificate</Form.Label>
                      <Form.Control
                        name='link'
                        type='text'
                        placeholder='Enter link to certificiate'
                        onChange={(e) => onChange(e)}
                      />
                      <Form.Text className='text-muted'>
                        eg. www.certificiatelink.com
                      </Form.Text>
                    </Form.Group>
                  </>
                )}
              </Card.Body>
            </Card>
            <Button
              style={{ width: "100%" }}
              variant={enable ? "success" : "danger"}
              disabled={enable === false}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </>
      )}
    </>
  );
};

export default Test;
