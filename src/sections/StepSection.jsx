import React from "react";

export const StepSection = () => {
  return (
    <div className="container-fluid steps py-5">
      <div className="container py-5">

        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h1 className="display-5 text-capitalize text-white mb-3">
          Get Started <span className="text-primary"> With Ease</span>
          </h1>
          {/* <p className="mb-0 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p> */}
        </div>
        <div className="row g-4">
          {[
            { title: "Call or Email Us", description: "Reach out to us via phone or email. Our friendly representative will connect with you promptly to answer your questions and guide you further.", number: "01." },
            { title: "Get Connected", description: "After contacting us, we will work closely with you to help select the right car and driving plan tailored to your needs.", number: "02." },
            { title: "Start Your Journey", description: "Once everything is set, you’re ready to start learning. Enjoy a safe and professional driving experience with our expert instructors!", number: "03." },
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


