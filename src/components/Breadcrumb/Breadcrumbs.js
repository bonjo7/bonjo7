import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = ({ currentPage }) => {
  return (
    <>
      <Breadcrumb>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <Breadcrumb.Item active>
          <span style={{ color: "#687078", marginLeft: "5px" }}>
            <h1
              style={{
                fontSize: "16px",
                marginTop: "-21.5px",
                marginLeft: "5px",
              }}
            >
              / {currentPage}
            </h1>
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
