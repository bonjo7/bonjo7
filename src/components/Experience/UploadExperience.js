/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import UseRoutes from "../../Hooks/RoutesHook";
import { Trash, Plus } from "phosphor-react";
import Spinner from "../Spinner/Spinner";
import styles from "./Experience.module.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const UploadExpereince = () => {
  const { id } = useParams()
  const { loading, experience, postExperienceData, getOneExp } = UseRoutes();
  const [enable, setEnable] = useState(false);
  const [employmentStatus, setEmployedStatus] = useState();
  const [formData, setFormData] = useState({
    companyName: "",
    companyStartDate: "",
    companyFinishDate: "",
    address: "",
    responsibilities: [],
  });
  const [fileData, setFileData] = useState();
  const [positions, setPositions] = useState([
    { positionStartDate: "", positionFinishDate: "", positionHeldTitle: "" },
  ]);

useEffect(() => {getOneExp(id)}, []);
  useEffect(() => {}, [loading]);

  const formValidation = () => {
    let positionValidation;
    let formValidation;
    positions.forEach((item) => {
      const { positionStartDate, positionFinishDate, positionHeldTitle } = item;
      if (
        positionStartDate &&
        positionStartDate !== "" &&
        positionFinishDate &&
        positionFinishDate !== "" &&
        positionHeldTitle &&
        positionHeldTitle !== ""
      ) {
        positionValidation = true;
      } else {
        positionValidation = false;
      }
    });

    const {
      companyName,
      companyStartDate,
      companyFinishDate,
      address,
      responsibilities,
    } = formData;

    if (
      companyName &&
      companyName !== "" &&
      companyStartDate &&
      companyStartDate !== "" &&
      companyFinishDate &&
      companyFinishDate !== "" &&
      address &&
      address !== "" &&
      responsibilities &&
      responsibilities !== "" &&
      fileData &&
      fileData.name !== ""
    ) {
      formValidation = true;
    }

    if (positionValidation && formValidation) {
      setEnable(true);
    }
  };

  useEffect(() => {
    formValidation();
  }, [formData, fileData, positions]);

  const employed = () => {
    employmentStatus ? setEmployedStatus(false) : setEmployedStatus(true);

    if (!employmentStatus) {
      setFormData({ ...formData, companyFinishDate: "Present" });

      const list = [...positions];
      list[0]["positionFinishDate"] = "Present";
      setPositions(list);
    }
  };

  const onChange = (e) => {
    const { name, files, value } = e.target;
    name === "file"
      ? setFileData(files[0])
      : setFormData({ ...formData, [name]: value });
  };

  const positionOnChange = (e, index) => {
    const { name, value } = e.target;
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
    setEmployedStatus(false);
    setEnable(false);
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
                      <Form.Label className={styles.required}>
                        Company Logo
                      </Form.Label>
                      <Form.Control
                        type='file'
                        name='file'
                        accept='image/*'
                        onChange={(e) => onChange(e)}
                        placeholder='upload image'
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label className={styles.required}>
                      Start Date
                    </Form.Label>

                    <Form.Control
                      name='companyStartDate'
                      type='date'
                      placeholder='dd/mm/yyyy'
                      onChange={(e) => onChange(e)}
                    />
                    <Form.Text className='text-muted'>eg. dd/mm/yyyy</Form.Text>
                  </Col>
                  <Col>
                    <Form.Label className={styles.required}>
                      Finish Date
                    </Form.Label>

                    <Form.Control
                      name='companyFinishDate'
                      type={employmentStatus ? "text" : "date"}
                      placeholder={employmentStatus ? "Present" : "dd/mm/yyyy"}
                      onChange={(e) => onChange(e)}
                      value={
                        employmentStatus ? "Present" : formData.companyStartDate
                      }
                      disabled={employmentStatus ? true : false}
                    />
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
                    name='address'
                    type='text'
                    placeholder='Enter company address'
                    onChange={(e) => onChange(e)}
                  />
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
                        <Form.Label className={styles.required}>
                          Start Date
                        </Form.Label>

                        <Form.Control
                          name='positionStartDate'
                          type='date'
                          value={item.positionStartDate}
                          placeholder='Enter year(s) you held this position'
                          onChange={(e) => positionOnChange(e, index)}
                        />
                        <Form.Text className='text-muted'>
                          eg. dd/mm/yyyy
                        </Form.Text>
                      </Col>
                      <Col>
                        <Form.Label className={styles.required}>
                          Finish Date
                        </Form.Label>

                        <Form.Control
                          name='positionFinishDate'
                          type={
                            employmentStatus && index === 0 ? "text" : "date"
                          }
                          value={
                            employmentStatus && index === 0
                              ? "Present"
                              : item.positionFinishDate
                          }
                          placeholder={
                            employmentStatus && index === 0
                              ? "Present"
                              : "dd/mm/yyyy"
                          }
                          disabled={employmentStatus && index === 0}
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
                        <Form.Label className={styles.required}>
                          Title
                        </Form.Label>

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
                            className={styles.trash}
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
                            className={styles.addPositionBtn}
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
              variant={enable ? "success" : "danger"}
              disabled={enable === false}
              onClick={handleSubmitForm}
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
