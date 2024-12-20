import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="" className="navbar-brand p-0">
              <h1 className="display-6 text-primary">
                <i className="fas fa-car-alt me-2"></i>Moor Driving School
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link
                  to="/"
                  className={`nav-item nav-link ${
                    location.pathname === "/" ? "text-danger" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`nav-item nav-link ${
                    location.pathname === "/about" ? "text-danger" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className={`nav-item nav-link ${
                    location.pathname === "/services" ? "text-danger" : ""
                  }`}
                >
                  Service
                </Link>
                <Link
                  to="/stories"
                  className={`nav-item nav-link ${
                    location.pathname === "/services" ? "text-danger" : ""
                  }`}
                >
                  Successful Stories
                </Link>
                
              </div>
              <a
                href="https://wa.me/353857563001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill py-2 px-4"
              >
                WhatsApp Call
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
