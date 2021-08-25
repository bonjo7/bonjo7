import { Toast } from "react-bootstrap";
import styles from "./Toast.module.css";
const ToastModal = ({ error, errorStatus, show, setShow }) => {
  const close = () => {
    setShow(false);
  };

  return (
    <Toast onClose={close} show={show} delay={5000} autohide>
      <Toast.Header className={styles.header}>
        <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
        <strong className='me-auto'>{errorStatus}</strong>
      </Toast.Header>
      <Toast.Body className={styles.body}>{error}</Toast.Body>
    </Toast>
  );
};

export default ToastModal;
