import React, { useState } from "react";
import carouselImg from "../assets/img/pic-4.webp";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide
  const totalSlides = 2; // Total number of slides

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Reusable Slide Content
  const SlideContent = ({ title, description }) => (
    <div className="container py-4">
      <div className="row g-5">
        {/* Left Side: Reservation Form */}
        {/* <div className="col-lg-6 fadeInLeft animated" style={{ animationDelay: "1s" }}>
          <div className="bg-secondary rounded p-5">
            <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
            <form>
              <div className="row g-3">
                <div className="col-12">
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Select Your Car type</option>
                    <option value="1">VW Golf VII</option>
                    <option value="2">Audi A1 S-Line</option>
                    <option value="3">Toyota Camry</option>
                    <option value="4">BMW 320 ModernLine</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                      <span className="fas fa-map-marker-alt"></span>
                      <span className="ms-1">Pick Up</span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter a City or Airport"
                      aria-label="Pick Up Location"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <a href="#" className="text-start text-white d-block mb-2">
                    Need a different drop-off location?
                  </a>
                  <div className="input-group">
                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                      <span className="fas fa-map-marker-alt"></span>
                      <span className="ms-1">Drop Off</span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter a City or Airport"
                      aria-label="Drop Off Location"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                      <span className="fas fa-calendar-alt"></span>
                      <span className="ms-1">Pick Up</span>
                    </div>
                    <input className="form-control" type="date" />
                    <select className="form-select ms-3" aria-label="Pick Up Time">
                      {[...Array(24).keys()].map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}:00
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                      <span className="fas fa-calendar-alt"></span>
                      <span className="ms-1">Drop Off</span>
                    </div>
                    <input className="form-control" type="date" />
                    <select className="form-select ms-3" aria-label="Drop Off Time">
                      {[...Array(24).keys()].map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}:00
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-light w-100 py-2">Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
        {/* Right Side: Slide Text */}
        <div className="col-lg-12 d-none d-lg-flex text-center fadeInRight animated" style={{ animationDelay: "1s" }}>
        <div className="banner-content">
        <h5 className="display-5 text-capitalize">
           <span className="text-white"> Ready to Hit the Road</span>
            </h5>
            
            <h1 className="display-2 text-capitalize">
           <span className="text-white"> Learn to Drive with Moor Driving School</span>
            </h1>
            
            <p className="text-white">Experience expert driving lessons tailored to your needs. Your journey to confident driving starts here!</p>
            
            <div className="banner-btn">
              <a
      href="https://wa.me/353857563001"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2"
    >
      WhatsApp Call
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

          {/* Second Slide */}
          <div className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}>
            <img src={carouselImg} className="img-fluid w-100" alt="Second slide" />
            <div className="carousel-caption">
              <SlideContent
                title="Get 15% off your rental! Choose Your Model"
                description="Explore premium cars for your journey"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
