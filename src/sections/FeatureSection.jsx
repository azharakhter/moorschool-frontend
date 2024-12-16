import React from "react";
import featureImg from "../assets/img/pic56.webp"

export const FeatureSection = () => {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Moor Driving <span className="text-primary">School</span>
          </h1>
          <p className="mb-0">
          Our expert driving instructors provide tailored lessons designed to build your confidence and ensure a lifetime of safe driving. With a proven success rate of over 500 driving test passes, we prepare you thoroughly to succeed on your first attempt.
          </p>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className="fa fa-trophy fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3">Automatic & Manual Car Lessons</h5>
                    <p className="mb-0">
                    Learn to drive confidently with options for both automatic and manual cars. Our lessons are tailored to match your driving preferences and goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className="fa fa-road fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3">12 EDT and 6 Reduced Lessons</h5>
                    <p className="mb-0">
                    Complete your mandatory 12 EDT or benefit from reduced lessons with expert guidance. Our structured approach ensures you meet all requirements effectively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
            <img
              src={featureImg}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
              alt="Img"
            />
          </div>
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Pre-test Lessons</h5>
                    <p className="mb-0">
                    Get ready for your driving test with focused pre-test lessons. We’ll help you master key skills and overcome common challenges
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-tag fa-2x"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Approved ADI Instructor (ID: 38157)</h5>
                    <p className="mb-0">
                    Learn from a professional ADI-approved instructor. Verify our expertise with Instructor ID: 38157 for peace of mind
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Pre-test Lessons</h5>
                    <p className="mb-0">
                    Get ready for your driving test with focused pre-test lessons. We’ll help you master key skills and overcome common challenges
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-tag fa-2x"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Improving Your Existing Driving Skills</h5>
                    <p className="mb-0">
                    Enhance your current driving skills with advanced lessons. Perfect for refreshing techniques or learning new road strategies                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Approved ADI Instructor (ID: 38157)</h5>
                    <p className="mb-0">
                    Learn from a professional ADI-approved instructor. Verify our expertise with Instructor ID: 38157 for peace of mind
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-tag fa-2x"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Mock Test</h5>
                    <p className="mb-0">
                    Simulate the real driving test with our mock test sessions. Gain confidence and identify areas for improvement in a stress-free environment.
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

