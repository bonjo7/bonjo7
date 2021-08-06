import React from "react";
import { Modal, Button } from "react-bootstrap";
import {version} from '../../../package.json';


const AboutModal = ({ show, handleClose }) => {
  const modalInfo = `This online profile was created using - \n ReactJS \n v17.0.2 \n React Bootstrap \n v1.6.1 \n If you like what you see feel free to fork the project at`;
  const newLineText = modalInfo.split("\n");

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#1d44b8" }}>About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{newLineText[0]}</p>
          <p style={{ marginBottom: "-5px" }}>
            <a
              style={{ color: "#1d44b8" }}
              href='https://reactjs.org/'
              target='_blank'
              rel='noreferrer'
              aria-label='React JS URL'
            >
              {newLineText[1]}
            </a>
            {newLineText[2]}
          </p>
          <p>
            <a
              style={{ color: "#1d44b8" }}
              href='https://react-bootstrap.github.io/'
              target='_blank'
              rel='noreferrer'
              aria-label='React bootstrap URL'
            >
              {newLineText[3]}
            </a>
            {newLineText[4]}
          </p>
          <p>
            {newLineText[5]}{" "}
            <a
              style={{ color: "#1d44b8" }}
              href='https://github.com/bonjo7/bonjo7'
              target='_blank'
              rel='noreferrer'
              aria-label='Bernard Thompson online profile GitHub URL'
            >
              https://github.com/bonjo7/bonjo7
            </a>
          </p>
          <p>Version {version}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button aria-label="Close modal button" variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AboutModal;
