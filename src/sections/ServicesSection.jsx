import React from "react";

export const ServicesSection = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Central Services by <span className="text-primary">Moor Driving School</span>
          </h1>
          <p className="mb-0">
            At Moor Driving School, we provide a complete range of driving services, from beginner lessons to advanced test preparation. With expert instructors and tailored training, we ensure you're fully prepared for safe and confident driving
          </p>
        </div>
        <div className="row g-4">
          {[
            {
              icon: "fa-phone-alt",
              title: "Phone Reservations",
              description:
                "Easily book your driving lessons with a quick call. Our team is here to help you schedule at your convenience.",
              delay: "0.1s",
            },
            {
              icon: "fa-money-bill-alt",
              title: "Affordable Rates",
              description:
                "Enjoy top-quality driving lessons at competitive prices. Special packages are available to suit your budget.",
              delay: "0.3s",
            },
            {
              icon: "fa-road",
              title: "Flexible Lessons",
              description:
                "Choose starting and ending locations that work best for you. Our lessons are designed for your convenience.",
              delay: "0.5s",
            },
            {
              icon: "fa-shield-alt",
              title: "Improving Your Existing Driving Skills",
              description:
                "Enhance your current driving skills with advanced lessons. Perfect for refreshing techniques or learning new road strategies",
              delay: "0.1s",
            },
            {
              icon: "fa-building",
              title: "City-to-City Training",
              description:
                "Master driving on both urban and intercity roads with lessons covering a variety of real-world scenarios.",
              delay: "0.3s",
            },
            {
              icon: "fa-car-alt",
              title: "Mock Test",
              description:
                "Simulate the real driving test with our mock test sessions. Gain confidence and identify areas for improvement in a stress-free environment",
              delay: "0.5s",
            },

          ].map((service, index) => (
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className={`fa ${service.icon} fa-2x`}></i>
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

