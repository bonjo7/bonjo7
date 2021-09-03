import React, { useState, useEffect, useRef } from "react";
import UseRoutes from "../../Hooks/RoutesHook";
import { Trash, Plus } from "phosphor-react";
import { useAuth } from "../../Hooks/AuthContext";
import Spinner from "../Spinner/Spinner";
import styles from "./Experience.module.css";
import nextId from "react-id-generator";
import { Form, Button, Row, Col, ListGroup, Card } from "react-bootstrap";

const UploadExpereince = () => {
  const imageRef = useRef();
  const titleRef = useRef();
  const yearRef = useRef();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({});
  const [fileData, setFileData] = useState();
  const [positions, setPositions] = useState([]);

  const id = nextId();
  const { loading, postExperienceData } = UseRoutes();

  useEffect(() => {}, [loading]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilechange = (e) => {
    setFileData(e.target.files[0]);
  };

  const addPosition = (e) => {
    const positionHeldYear = formData.positionHeldYear;
    const positionHeldTitle = formData.positionHeldTitle;

    e.preventDefault();
    titleRef.current.value = "";
    yearRef.current.value = "";
    setPositions(positions.concat({ id, positionHeldYear, positionHeldTitle }));
  };

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("id");
    setPositions(positions.filter((item) => item.id !== name));
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

          <Form.Group className='mb-3' controlId='formBasicEmail'></Form.Group>
          <Row>
            <Col>
              <Form.Label>Year(s) Position Held</Form.Label>
              <Form.Control
                name='positionHeldYear'
                type='text'
                placeholder='Enter year(s) you held this position'
                onChange={(e) => onChange(e)}
                ref={yearRef}
              />
              <Form.Text className='text-muted'>
                eg. January 2019 – August 2020
              </Form.Text>
            </Col>
            <Col>
              <Form.Label>Title Position Held</Form.Label>
              <Form.Control
                name='positionHeldTitle'
                type='text'
                placeholder='Enter position(s) held'
                onChange={(e) => onChange(e)}
                ref={titleRef}
              />
              <Form.Text className='text-muted'>
                eg. Associate Developer
              </Form.Text>
            </Col>
            <Col>
              <Button
                variant='primary'
                className={styles.addPositionBtn}
                onClick={(e) => addPosition(e)}
              >
                Add Position
              </Button>
            </Col>
          </Row>

          {positions.length > 0 && (
            <Card className={styles.positionGroup}>
              <Card.Body>
                <Card.Title>Postions within company</Card.Title>
                {positions.map((item, key) => {
                  return (
                    <div key={key}>
                      <ListGroup variant='flush' key={key}>
                        <ListGroup.Item key={item.id}>
                          {item.positionHeldYear} {item.positionHeldTitle}
                          <Trash
                            size={25}
                            color='#ed0c0c'
                            id={item.id}
                            onClick={handleRemoveItem}
                          />
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  );
                })}
              </Card.Body>
            </Card>
          )}

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
