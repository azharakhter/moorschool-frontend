import React from "react";

export const StepSection = () => {
  return (
    <div className="container-fluid steps py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h1 className="display-5 text-capitalize text-white mb-3">
            Cental<span className="text-primary"> Process</span>
          </h1>
          <p className="mb-0 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          {[
            { title: "Come In Contact", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!", number: "01." },
            { title: "Choose A Car", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!", number: "02." },
            { title: "Enjoy Driving", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!", number: "03." },
          ].map((step, index) => (
            <div className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
              <div className="steps-item p-4 mb-4">
                <h4>{step.title}</h4>
                <p className="mb-0">{step.description}</p>
                <div className="setps-number">{step.number}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


