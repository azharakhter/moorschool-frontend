import React, { useState } from "react";
import carouselImg from "../assets/img/pic-4.webp";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide
  const totalSlides = 2; // Total number of slides

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const SlideContent = ({ title, description }) => (
    <div className="container py-4">
      <div className="row g-5">
        <div className="col-lg-12 d-none d-lg-flex text-center fadeInRight animated" style={{ animationDelay: "1s" }}>
          <div className="banner-content">
            <h5 className="display-5 text-capitalize">
              <span className="text-white"> Ready to Hit the Road</span>
            </h5>

            <h1 className="display-2 text-capitalize">
              <span className="text-white"> Learn to Drive with Moor Driving School</span>
            </h1>

            <p className="text-white">Experience expert driving lessons with an ADI-approved instructor, tailored to your needs. Begin your journey to confident and safe driving today!</p>

            <div className="banner-btn">
              <a
                href="https://wa.me/353857563001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2"
              >
                WhatsApp(+353 857 563 001)
              </a>

              <a href="mailto:Moordrivingschoolwaterford@gmail.com" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">
                Moordrivingschoolwaterford@gmail.com
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="header-carousel">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        {/* Custom Indicators */}
        <ol className="carousel-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselId"
              data-bs-slide-to={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => handleSlideChange(index)}
              aria-label={`Slide ${index + 1}`}
            ></li>
          ))}
        </ol>

        {/* Carousel Slides */}
        <div className="carousel-inner" role="listbox">
          {/* First Slide */}
          <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}>
            <img src={carouselImg} className="img-fluid w-100" alt="First slide" />
            <div className="carousel-caption">
              <SlideContent
                title="Get 15% off your rental! Plan your trip now"
                description="Treat yourself in the USA"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
