import React, { useState, useEffect, useRef } from "react";
import UseRoutes from "../../Hooks/RoutesHook";
import { useAuth } from "../../Hooks/AuthContext";
import Spinner from "../Spinner/Spinner";
import { Form, Button, Row, Col } from "react-bootstrap";

const UploadExpereince = () => {
  const ref = useRef();
  const { currentUser } = useAuth();
  const [fileData, setFileData] = useState();
  const [formData, setFormData] = useState({
    companyName: "",
    year: "",
    positionHeldYear: "",
    positionHeldTitle: "",
    address: "",
    responsibilities: [],
  });
  const { loading, postExperienceData } = UseRoutes();

  useEffect(() => {}, [loading]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilechange = (e) => {
    setFileData(e.target.files[0]);
  };

  let positionArray = [];
  let positionHeldTitle;
  let positionHeldYear;

  const onChnagePostion = (e) => {
    e.preventDefault(e);
    if ((e.target.name = "positionHeldYear")) {
      positionHeldYear = e.target.value;
    }
    if ((e.target.name = "positionHeldTitle")) {
      positionHeldTitle = e.target.value;
    }
  };

  const addPosition = (e) => {
    e.preventDefault(e);
    positionArray.push({ positionHeldYear, positionHeldTitle });
  };

  const generateFormDataForUpload = () => {
    console.log(positionArray);
    const completeFormData = new FormData();
    completeFormData.append("companyName", formData.companyName);
    completeFormData.append("year", formData.year);
    completeFormData.append("positionHeld", JSON.stringify(positionArray));
    completeFormData.append("address", formData.address);
    completeFormData.append("responsibilities", formData.responsibilities);
    completeFormData.append("image", fileData);

    // console.log(formData)
    postExperienceData(completeFormData);
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

          <Form.Group controlId='formFile' className='mb-3'>
            <Form.Label>Company Logo</Form.Label>
            <Form.Control
              type='file'
              name='file'
              accept='image/*'
              onChange={(e) => handleFilechange(e)}
              placeholder='upload image'
              ref={ref}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'></Form.Group>
          <Row>
            <Col>
              <Form.Label>Year(s) Position Held</Form.Label>
              <Form.Control
                name='positionHeldYear'
                type='text'
                placeholder='Enter year(s) you held this position'
                onChange={(e) => onChnagePostion(e)}
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
                onChange={(e) => onChnagePostion(e)}
              />
              <Form.Text className='text-muted'>
                eg. Associate Developer
              </Form.Text>
            </Col>
            <Col>
              <Button onClick={(e) => addPosition(e)}>Add Position</Button>
            </Col>
          </Row>

          <Button
            variant='primary'
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
