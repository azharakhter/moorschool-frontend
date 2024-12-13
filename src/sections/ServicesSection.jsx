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
            Cental <span className="text-primary">Services</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum,
            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
            quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          {[
            {
              icon: "fa-phone-alt",
              title: "Phone Reservation",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
              delay: "0.1s",
            },
            {
              icon: "fa-money-bill-alt",
              title: "Special Rates",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
              delay: "0.3s",
            },
            {
              icon: "fa-road",
              title: "One Way Rental",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
              delay: "0.5s",
            },
            {
              icon: "fa-umbrella",
              title: "Life Insurance",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
              delay: "0.1s",
            },
            {
              icon: "fa-building",
              title: "City to City",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
              delay: "0.3s",
            },
            {
              icon: "fa-car-alt",
              title: "Free Rides",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?",
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

