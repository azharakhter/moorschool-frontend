import React from "react";
import aboutIcone from "../assets/img/about-icon-1.png"
import aboutIcone1 from "../assets/img/about-icon-2.png"
import attachImg from "../assets/img/attachment-img.jpg"
import aboutImg from "../assets/img/pic56.webp";

import aboutImg1 from "../assets/img/pic-3.webp";




export const AboutSection = () => {
  return (
    <div className="container-fluid overflow-hidden about py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-item">
              <div className="pb-5">
                <h1 className="display-5 text-capitalize">
                  Moor Driving <span className="text-primary">School</span>
                </h1>
                <p className="mb-0">
                At Moor Driving School, our experienced team is dedicated to guiding you from a learner permit to obtaining your full B licence. To qualify for your driving test, you must complete a minimum of 12 one-hour lessons. With Moor Driving School, you'll develop lifelong safe driving habits and gain the skills needed to pass your driving test on your first attempt
                </p>
              </div>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="about-item-inner border p-4">
                    <div className="about-icon mb-4">
                      <img
                        src={aboutIcone}
                        className="img-fluid w-50 h-50"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="mb-3">Our Vision</h5>
                    <p className="mb-0">
                    To empower learners with the skills and confidence to become safe and responsible drivers for life.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-item-inner border p-4">
                    <div className="about-icon mb-4">
                      <img
                        src={aboutIcone1}
                        className="img-fluid h-50 w-50"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="mb-3">Our Mission</h5>
                    <p className="mb-0">
                    To provide expert driving instruction, tailored to each learner’s needs, ensuring success in achieving their driving goals
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="mb-3">Why Choose Moor Driving School?</h5>
              <p className="mb-2">
                      <i className="fa fa-check-circle text-primary me-1"></i> 15 years of professional driving instruction experience.
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-check-circle text-primary me-1"></i>Over 500 successful driving test passes and counting.
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-check-circle text-primary me-1"></i> Expert knowledge of RSA test routes nationwide.
                    </p>
                    <p className="mb-0">
                      <i className="fa fa-check-circle text-primary me-1"></i> Tailored lessons to suit all skill levels and learning paces
                    </p>  
           
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="text-center rounded bg-secondary p-4">
                    <h1 className="display-6 text-white">15</h1>
                    <h5 className="text-light mb-0">Years Of Experience</h5>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="rounded">
                    <p className="mb-2">
                      <i className="fa fa-check-circle text-primary me-1"></i> Morbi tristique senectus
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-check-circle text-primary me-1"></i> A scelerisque purus
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-check-circle text-primary me-1"></i> Dictumst vestibulum
                    </p>
                    <p className="mb-0">
                      <i className="fa fa-check-circle text-primary me-1"></i> dio aenean sed adipiscing
                    </p>
                  </div>
                </div> */}
                <div className="col-lg-5 d-flex align-items-center">
                  <a href="#" className="btn btn-primary rounded py-3 px-5">
                    Contact us
                  </a>
                </div>
                {/* <div className="col-lg-7">
                  <div className="d-flex align-items-center">
                    <img
                      src={attachImg}
                      className="img-fluid rounded-circle border border-4 border-secondary"
                      style={{ width: "100px", height: "100px" }}
                      alt="Image"
                    />
                    <div className="ms-4">
                      <h4>Founder</h4>
                      <p className="mb-0">Naveed</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="about-img">
              <div className="img-1">
                <img
                  src={aboutImg}
                  className="img-fluid rounded h-100 w-100"
                  alt=""
                />
              </div>
              <div className="img-2">
                <img
                  src={aboutImg1}
                  className="img-fluid rounded w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


