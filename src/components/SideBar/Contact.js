import React from "react";
import styles from "./SideBar.module.css";
import { Envelope, Phone } from "phosphor-react";

const Contact = (props) => {
  const { email, tel } = props;

  return (
    <>
      <Envelope size={20} />
      {email}
      <Phone size={20} />
      {tel}
    </>
  );
};

export default Contact;
