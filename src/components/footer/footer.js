import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Moor Driving School</h4>
                  <p className="mb-3">
                  Our expert driving instructors provide tailored lessons designed to build your confidence and ensure a lifetime of safe driving. 
                  </p>
                </div>
                <div className="position-relative">
                  {/* <input
                    className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    Subscribe
                  </button> */}
                 
                  
                  <a
      href="https://wa.me/353857563001"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary rounded-pill py-2 px-4 text-white"
    >
      WhatsApp Call
    </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link to="">
                  <i className="fas fa-angle-right me-2"></i> Home
                </Link>
                <Link to="/about">
                  <i className="fas fa-angle-right me-2"></i> About
                </Link>
                <Link to="/services">
                  <i className="fas fa-angle-right me-2"></i> Services
                </Link>
                            </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA
                </a>
                <a href="mailto:Moordrivingschoolwaterford@gamil.com">
                  <i className="fas fa-envelope me-2"></i>Moordrivingschoolwaterford
                </a>
                     
                <a
      href="https://wa.me/353857563001"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary rounded-pill py-2 px-4 text-white"
    >
      WhatsApp Call
    </a>
{/*                
                <div className="d-flex">
                  <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="#">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="#">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="#">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a className="btn btn-secondary btn-md-square rounded-circle me-0" href="#">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      {/* <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
              Designed By{" "}
              <a className="border-bottom text-white" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a className="border-bottom text-white" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* Copyright End */}
    </>
  );
};

