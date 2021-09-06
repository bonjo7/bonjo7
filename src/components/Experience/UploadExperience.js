/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from "react";
import UseRoutes from "../../Hooks/RoutesHook";
import { Trash, Plus } from "phosphor-react";
import { useAuth } from "../../Hooks/AuthContext";
import Spinner from "../Spinner/Spinner";
import styles from "./Experience.module.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const UploadExpereince = () => {
  const imageRef = useRef();
  const titleRef = useRef();
  const yearRef = useRef();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({});
  const [fileData, setFileData] = useState();
  const [positions, setPositions] = useState([
    { positionHeldYear: "", positionHeldTitle: "" },
  ]);

  const { loading, postExperienceData } = UseRoutes();

  useEffect(() => {}, [loading]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilechange = (e) => {
    setFileData(e.target.files[0]);
  };

  const positionOnChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...positions];
    list[index][name] = value;
    console.log(list);
    setPositions(list);
  };

  const handleRemoveItem = (e, index) => {
    const list = [...positions];
    list.splice(index, 1);
    setPositions(list);
  };

  const handleAddClick = () => {
    setPositions([
      ...positions,
      { positionHeldYear: "", positionHeldTitle: "" },
    ]);
  };

  const generateFormDataForUpload = () => {
    const completeFormData = new FormData();
    completeFormData.append("companyName", formData.companyName);
    completeFormData.append("year", formData.year);
    completeFormData.append("positionHeld", JSON.stringify(positions));
    completeFormData.append("address", formData.address);
    completeFormData.append("responsibilities", formData.responsibilities);
    completeFormData.append("image", fileData);

    postExperienceData(completeFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    generateFormDataForUpload();
    imageRef.current.value = "";
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Card className={styles.section}>
            <Card.Body>
              <Row>
                <Col>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      name='companyName'
                      type='text'
                      placeholder='Enter company name'
                      onChange={(e) => onChange(e)}
                    />
                    <Form.Text className='text-muted'>eg. Red Hat</Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label>Company Logo</Form.Label>
                    <Form.Control
                      type='file'
                      name='file'
                      accept='image/*'
                      onChange={(e) => handleFilechange(e)}
                      placeholder='upload image'
                      ref={imageRef}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Duration (Year)</Form.Label>
                <Form.Control
                  name='year'
                  type='text'
                  placeholder='Enter year'
                  onChange={(e) => onChange(e)}
                />
                <Form.Text className='text-muted'>
                  eg. January 2019 - March 2020
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Company Address</Form.Label>
                <Form.Control
                  name='address'
                  type='text'
                  placeholder='Enter company address'
                  onChange={(e) => onChange(e)}
                />
                <Form.Text className='text-muted'>
                  Red Hat, Communications House, Cork Road, Waterford, Ireland.
                </Form.Text>
              </Form.Group>
            </Card.Body>
          </Card>

          <Card className={styles.section}>
            <Card.Body>
              <Form.Group
                className='mb-3'
                controlId='formBasicEmail'
              ></Form.Group>
              <Row>
                <Col>
                  <Form.Label>Year Position Held</Form.Label>
                </Col>
                <Col>
                  <Form.Label>Title Position Held</Form.Label>
                </Col>
                <Col></Col>
              </Row>
              {positions.map((item, i) => {
                return (
                  <Row className={styles.row} key={i}>
                    <Col>
                      <Form.Control
                        name='positionHeldYear'
                        type='text'
                        value={item.positionHeldYear}
                        placeholder='Enter year(s) you held this position'
                        onChange={(e) => positionOnChange(e, i)}
                        ref={yearRef}
                      />
                      <Form.Text className='text-muted'>
                        eg. January 2019 – August 2020
                      </Form.Text>
                    </Col>
                    <Col>
                      <Form.Control
                        name='positionHeldTitle'
                        type='text'
                        value={item.positionHeldTitle}
                        placeholder='Enter position(s) held'
                        onChange={(e) => positionOnChange(e, i)}
                        ref={titleRef}
                      />
                      <Form.Text className='text-muted'>
                        eg. Associate Developer
                      </Form.Text>
                    </Col>

                    <Col>
                      {positions.length !== 1 && (
                        <Trash
                          className={styles.trash}
                          size={30}
                          color='#ed0c0c'
                          id={item.id}
                          onClick={(e) => handleRemoveItem(e, i)}
                        />
                      )}
                      {positions.length - 1 === i && (
                        <Plus
                          size={30}
                          color='#1d44b8'
                          className={styles.addPositionBtn}
                          onClick={handleAddClick}
                        />
                      )}
                    </Col>
                  </Row>
                );
              })}
            </Card.Body>
          </Card>

          <Card className={styles.section}>
            <Card.Body>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Responsibilities</Form.Label>
                <Form.Control
                  name='responsibilities'
                  type='text'
                  as='textarea'
                  rows={6}
                  placeholder='Enter responsibilities'
                  onChange={(e) => onChange(e)}
                />
                <Form.Text className='text-muted'>
                  eg. List all your responsibilities
                </Form.Text>
              </Form.Group>
            </Card.Body>
          </Card>

          <Button
            style={{ width: "100%" }}
            variant='success'
            disabled={currentUser === "TestUser"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </>
      )}
    </>
  );
};

export default UploadExpereince;
