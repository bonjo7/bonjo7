import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Test = () => {
  const baseURL = "http://localhost:8080";
  const ref = useRef();
  const [fileData, setFileData] = useState();
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    year: "",
    grade: "",
    link: ""  
  });

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFilechange = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const completeFormData = new FormData();
    completeFormData.append("name", formData.name);
    completeFormData.append("course", formData.course);
    completeFormData.append("year", formData.year);
    completeFormData.append("grade", formData.grade);
    completeFormData.append("link", formData.link);
    completeFormData.append("image", fileData);
    ref.current.value = "";
    
    await axios
      .post(`${baseURL}/api/image`, completeFormData)
      .then((res) => console.log("res - ", res))
      .catch((err) => console.log("error - ", err));

  };

  return (
    <>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Institute Name</Form.Label>
        <Form.Control
          name="name"
          type='text'
          placeholder='Enter institute name'
          onChange={(e) => onChange(e)}
        />
        <Form.Text className='text-muted'>
          eg. Waterford Institute of technology
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Course Title</Form.Label>
        <Form.Control
          name="course"
          type='text'
          placeholder='Enter course title'
          onChange={(e) => onChange(e)}
        />
        <Form.Text className='text-muted'>
          eg. HDip in Computer Science
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Year(s)</Form.Label>
        <Form.Control
          name="year"
          type='text'
          placeholder='Enter year as yyyy - yyyy'
          onChange={(e) => onChange(e)}
        />
        <Form.Text className='text-muted'>eg. 2019 - 2020</Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Grade</Form.Label>
        <Form.Control
          name="grade"
          type='text'
          placeholder='Enter grade'
          onChange={(e) => onChange(e)}
        />
        <Form.Text className='text-muted'>eg. Distinction</Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Link to certificate</Form.Label>
        <Form.Control
          name="link"
          type='text'
          placeholder='Enter link to certificiate'
          onChange={(e) => onChange(e)}
        />
        <Form.Text className='text-muted'>
          eg. www.certificiatelink.com
        </Form.Text>
      </Form.Group>

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

      <Button variant='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Test;
