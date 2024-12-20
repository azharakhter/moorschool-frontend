import React from "react";
import c1 from "../assets/img/c1.jpeg";
import c2 from "../assets/img/c2.jpg";
import c3 from "../assets/img/c3.jpg";
import c4 from "../assets/img/c4.jpg";
import c5 from "../assets/img/c5.jpg";
import c6 from "../assets/img/c6.jpg";
import c7 from "../assets/img/c7.jpg";
import c8 from "../assets/img/c8.jpg";
import c9 from "../assets/img/c9.jpg";



export const CustomerSucessSection = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
          Successful Stories from <span className="text-primary">Moor Driving School</span>
          </h1>
          <p className="mb-0">
          At Moor Driving School, we help aspiring drivers become confident, skilled, and responsible road users. Our expert instructors, tailored training programs, and focus on safety ensure students not only pass their driving tests but also gain lifelong driving skills
          </p>
        </div>
        <div className="row g-4">
          {[
            {
              image:c1,
            },
            {
              image:c2,
            },
            {
              image:c3,
            },
            {
              image:c4,
            },
            {
              image:c5,
            },
            {
              image:c6,
            },
            {
              image:c7,
            },
            {
              image:c8,
            },
            {
              image:c9,
            },
            

          ].map((service, index) => (
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-item p-4">
              <img src={service.image} alt="customer-picture" ></img>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

