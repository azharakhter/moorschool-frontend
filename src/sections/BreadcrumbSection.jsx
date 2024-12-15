import React from "react";
import bgImage from "../assets/img/fact-bg.jpg"
import { Link } from "react-router-dom";
export const BreadcrumbSection = ({pageName}) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(31, 46, 78, 1), rgba(0, 12, 33, 0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="container-fluid bg-breadcrumb">
      <div
        className="container text-center py-5"
        style={{ maxWidth: "900px" }}
      >
        <h4 className="text-white display-4 mb-4">{pageName}</h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="">Home</Link>
          </li>
          <li className="breadcrumb-item active text-primary">{pageName}</li>
        </ol>
      </div>
    </div>
  );
};
