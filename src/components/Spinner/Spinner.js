import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerComponent = () => {
  return (
    <Spinner
      animation='border'
      style={{
        color: "#1d44b8",
        marginLeft: "42%",
        verticalAlign: "middle",
        width: "100px",
        height: "100px",
      }}
    ></Spinner>
  );
};

export default SpinnerComponent;
