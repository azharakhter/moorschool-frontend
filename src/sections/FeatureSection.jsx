import React from "react";
import featureImg from "../assets/img/pic.webp"

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
            Moors Driving <span className="text-primary">School</span>
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
                    <h5 className="mb-3">Premium Driving Lessons Tailored to You</h5>
                    <p className="mb-0">
                    Learn from the best with personalized instruction that prepares you for a lifetime of safe driving.
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
                    <h5 className="mb-3">Learn Manual Driving with Confidence</h5>
                    <p className="mb-0">
                    Master the art of manual car driving with expert guidance, ensuring you gain complete control and confidence behind the wheel—all at an affordable price                    </p>
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
                    <h5 className="mb-3">Automatic Driving Made Easy</h5>
                    <p className="mb-0">
                    Enjoy a stress-free learning experience with automatic cars, tailored for convenience and comfort, available with 24/7 support to help you succeed.
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
                    <h5 className="mb-3">Hassle-Free Pick-Up & Drop-Off</h5>
                    <p className="mb-0">
                    Save time with our free pick-up and drop-off service, bringing the driving school to your doorstep.
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

