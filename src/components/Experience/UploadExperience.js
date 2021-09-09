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
  } = useForm({ mode: "onChange" });
  const { currentUser } = useAuth();
  const [employmentStatus, setEmployedStatus] = useState();
  const [formData, setFormData] = useState({});
  const [fileData, setFileData] = useState();
  const [positions, setPositions] = useState([
    { positionStartDate: "", positionFinishDate: "", positionHeldTitle: "" },
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

  const employed = () => {
    employmentStatus ? setEmployedStatus(false) : setEmployedStatus(true);
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
      { positionStartDate: "", positionFinishDate: "", positionHeldTitle: "" },
    ]);
  };

  const handleSubmitForm = () => {
    const completeFormData = new FormData();
    completeFormData.append("companyName", formData.companyName);
    completeFormData.append("companyStartDate", formData.companyStartDate);
    completeFormData.append("companyFinishDate", formData.companyFinishDate);
    completeFormData.append("positionHeld", JSON.stringify(positions));
    completeFormData.append("address", formData.address);
    completeFormData.append("responsibilities", formData.responsibilities);
    completeFormData.append("image", fileData);

    postExperienceData(completeFormData);
  };

  console.log(positions)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Form>
            <Card className={styles.section}>
              <Card.Body>
                <Card.Title>Company details</Card.Title>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <Form.Check
                        className={styles.checkbox}
                        type='checkbox'
                        label='If this is your current employer, please check the checkbox to set fields correctly'
                        onClick={(e) => {
                          employed(e);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label className={styles.required}>
                        Company Name
                      </Form.Label>

                      <Form.Control
                        className={errors.companyName ? styles.errorsInput : ""}
                        name='companyName'
                        type='text'
                        placeholder='Enter company name'
                        {...register("companyName", { required: true })}
                        onChange={(e) => onChange(e)}
                      />
                      {errors.companyName && (
                        <p className={styles.errors}>
                          Company Name is required
                        </p>
                      )}
                      <Form.Text className='text-muted'>eg. Red Hat</Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='formFile' className='mb-3'>
                      <Form.Label className={styles.required}>
                        Company Logo
                      </Form.Label>
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
                        <p className={styles.errors}>
                          Company Image is required
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label className={styles.required}>
                      Start Date
                    </Form.Label>

                    <Form.Control
                      className={
                        errors.companyStartDate ? styles.errorsInput : ""
                      }
                      name='companyStartDate'
                      type='date'
                      placeholder='dd/mm/yyyy'
                      {...register("companyStartDate", { required: true })}
                      onChange={(e) => onChange(e)}
                    />
                    {errors.companyStartDate && (
                      <p className={styles.errors}>Start Date is required</p>
                    )}
                    <Form.Text className='text-muted'>eg. dd/mm/yyyy</Form.Text>
                  </Col>
                  <Col>
                    <Form.Label className={styles.required}>
                      Finish Date
                    </Form.Label>

                    <Form.Control
                      className={
                        errors.companyFinishDate ? styles.errorsInput : ""
                      }
                      name='companyFinishDate'
                      type={employmentStatus ? "text" : "date"}
                      placeholder={employmentStatus ? "Present" : "dd/mm/yyyy"}
                      {...register("companyFinishDate", { required: true })}
                      onChange={(e) => onChange(e)}
                    />
                    {errors.companyFinishDate && (
                      <p className={styles.errors}>Finsh Date is required</p>
                    )}
                    <Form.Text className='text-muted'>
                      eg. {employmentStatus ? "Present" : "dd/mm/yyyy"}
                    </Form.Text>
                  </Col>
                </Row>

                <Form.Group
                  className='mb-3'
                  controlId='formBasicEmail'
                  style={{ marginTop: "15px" }}
                >
                  <Form.Label className={styles.required}>
                    Company Address
                  </Form.Label>
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
                    eg. Red Hat, Communications House, Cork Road, Waterford,
                    Ireland.
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
                <Card.Title>Positions Held within company</Card.Title>

                {positions.map((item, index) => {
                  return (
                    <Row className={styles.row} key={index}>
                      <Col>
                        {index === 0 && (
                          <Form.Label className={styles.required}>
                            Start Date
                          </Form.Label>
                        )}

                        <Form.Control
                          name='positionStartDate'
                          type='date'
                          // value={item.positionStartDate}
                          placeholder='Enter year(s) you held this position'
                          onChange={(e) => positionOnChange(e, index)}
                        />
                        <Form.Text className='text-muted'>
                          eg. dd/mm/yyyy
                        </Form.Text>
                      </Col>
                      <Col>
                        {index === 0 && (
                          <Form.Label className={styles.required}>
                            Finish Date
                          </Form.Label>
                        )}
                        <Form.Control
                          name='positionFinishDate'
                          type={
                            employmentStatus && index === 0 ? "text" : "date"
                          }
                          value={item.positionFinishDate}
                          placeholder={
                            employmentStatus && index === 0
                              ? "Present"
                              : "dd/mm/yyyy"
                          }
                          onChange={(e) => positionOnChange(e, index)}
                        />
                        <Form.Text className='text-muted'>
                          eg.{" "}
                          {employmentStatus && index === 0
                            ? "Present"
                            : "dd/mm/yyyy"}
                        </Form.Text>
                      </Col>
                      <Col>
                        {index === 0 && (
                          <Form.Label className={styles.required}>
                            Title
                          </Form.Label>
                        )}
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

                      <Col className={styles.colButton}>
                        {positions.length !== 1 && (
                          <Trash
                            className={
                              index === 0 ? styles.trashFirst : styles.trash
                            }
                            size={30}
                            color='#ed0c0c'
                            id={item.id}
                            onClick={(e) => handleRemoveItem(e, index)}
                          />
                        )}
                      </Col>
                      <Col className={styles.colButton}>
                        {positions.length - 1 === index && (
                          <Plus
                            className={
                              index === 0
                                ? styles.addPositionBtnFirst
                                : styles.addPositionBtn
                            }
                            size={30}
                            color='#1d44b8'
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
                <Card.Title>
                  Roles and responsibilities within company
                </Card.Title>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label className={styles.required}>
                    Responsibilities
                  </Form.Label>
                  <Form.Control
                    className={
                      errors.responsibilities ? styles.errorsInput : ""
                    }
                    name='responsibilities'
                    type='text'
                    as='textarea'
                    rows={6}
                    placeholder='Enter responsibilities'
                    {...register("responsibilities", { required: true })}
                    onChange={(e) => onChange(e)}
                  />
                  {errors.responsibilities && (
                    <p className={styles.errors}>
                      Responsibilities is required
                    </p>
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
          </Form>
        </>
      )}
    </>
  );
};

export default UploadExpereince;
