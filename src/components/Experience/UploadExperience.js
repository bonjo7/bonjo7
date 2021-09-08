/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UseRoutes from "../../Hooks/RoutesHook";
import { Trash, Plus } from "phosphor-react";
import { useAuth } from "../../Hooks/AuthContext";
import Spinner from "../Spinner/Spinner";
import styles from "./Experience.module.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const UploadExpereince = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({});
  const [fileData, setFileData] = useState();
  const [positions, setPositions] = useState([
    { positionHeldYear: "", positionHeldTitle: "" },
  ]);

  const { loading, postExperienceData } = UseRoutes();

  useEffect(() => {}, [loading]);

  const clearErrorsOnInput = (e) => {
    switch (e) {
      case "companyName":
        clearErrors("companyName");
        break;
      case "address":
        clearErrors("address");
        break;
      case "year":
        clearErrors("year");
        break;
      case "responsibilities":
        clearErrors("responsibilities");
        break;
      case "file":
        clearErrors("file");
        break;
      default:
        clearErrors();
    }
  };

  const onChange = (e) => {
    const { name, files, value } = e.target;
    clearErrorsOnInput(name);
    name === "file"
      ? setFileData(files[0])
      : setFormData({ ...formData, [name]: value });
  };

  const positionOnChange = (e, index) => {
    const { name, value } = e.target;
    clearErrorsOnInput(name, index);
    const list = [...positions];
    list[index][name] = value;
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

  const handleSubmitForm = () => {
    const completeFormData = new FormData();
    completeFormData.append("companyName", formData.companyName);
    completeFormData.append("year", formData.year);
    completeFormData.append("positionHeld", JSON.stringify(positions));
    completeFormData.append("address", formData.address);
    completeFormData.append("responsibilities", formData.responsibilities);
    completeFormData.append("image", fileData);

    postExperienceData(completeFormData);
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
                      className={errors.companyName ? styles.errorsInput : ""}
                      name='companyName'
                      type='text'
                      placeholder='Enter company name'
                      {...register("companyName", { required: true })}
                      onChange={(e) => onChange(e)}
                    />
                    {errors.companyName && (
                      <p className={styles.errors}>Company Name is required</p>
                    )}
                    <Form.Text className='text-muted'>eg. Red Hat</Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label>Company Logo</Form.Label>
                    <Form.Control
                      className={errors.file ? styles.errorsInput : ""}
                      type='file'
                      name='file'
                      accept='image/*'
                      {...register("file", { required: true })}
                      onChange={(e) => onChange(e)}
                      placeholder='upload image'
                    />
                    {errors.file && (
                      <p className={styles.errors}>Company Image is required</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Duration (Year)</Form.Label>
                <Form.Control
                  className={errors.year ? styles.errorsInput : ""}
                  name='year'
                  type='text'
                  placeholder='Enter year'
                  {...register("year", { required: true })}
                  onChange={(e) => onChange(e)}
                />
                {errors.year && (
                  <p className={styles.errors}>Company duration is required</p>
                )}
                <Form.Text className='text-muted'>
                  eg. January 2019 - March 2020
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Company Address</Form.Label>
                <Form.Control
                  className={errors.address ? styles.errorsInput : ""}
                  name='address'
                  type='text'
                  placeholder='Enter company address'
                  {...register("address", { required: true })}
                  onChange={(e) => onChange(e)}
                />
                {errors.address && (
                  <p className={styles.errors}>Company Address is required</p>
                )}
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
              {positions.map((item, index) => {
                return (
                  <Row className={styles.row} key={index}>
                    <Col>
                      <Form.Control
                      className={errors.positionHeldYear ? styles.errorsInput : ""}
                        name='positionHeldYear'
                        type='text'
                        value={item.positionHeldYear}
                        placeholder='Enter year(s) you held this position'
                        onChange={(e) => positionOnChange(e, index)}
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
                        onChange={(e) => positionOnChange(e, index)}
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
                          onClick={(e) => handleRemoveItem(e, index)}
                        />
                      )}
                      {positions.length - 1 === index && (
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
                  className={errors.responsibilities ? styles.errorsInput : ""}
                  name='responsibilities'
                  type='text'
                  as='textarea'
                  rows={6}
                  placeholder='Enter responsibilities'
                  {...register("responsibilities", { required: true })}
                  onChange={(e) => onChange(e)}
                />
                {errors.responsibilities && (
                  <p className={styles.errors}>Responsibilities is required</p>
                )}
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
            onClick={handleSubmit(handleSubmitForm)}
          >
            Submit
          </Button>
        </>
      )}
    </>
  );
};

export default UploadExpereince;
