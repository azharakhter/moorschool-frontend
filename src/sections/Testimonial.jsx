import React from "react";
import OwlCarousel from "react-owl-carousel";

import carouelImg from "../assets/img/testimonial-1.jpg";

export const Testimonial = () => {
  const testimonials = [
    {
      img: `${carouelImg}`,
      name: "Person Name",
      profession: "Profession",
      stars: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.",
    },
    {
      img: `${carouelImg}`,
      name: "Person Name",
      profession: "Profession",
      stars: 3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.",
    },
    {
      img: `${carouelImg}`,
      name: "Person Name",
      profession: "Profession",
      stars: 2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.",
    },
  ];

  const carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Our Clients<span className="text-primary"> Reviews</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum,
            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
            quia distinctio,
          </p>
        </div>
        <OwlCarousel
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
          {...carouselOptions}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-quote">
                <i className="fa fa-quote-right fa-2x"></i>
              </div>
              <div className="testimonial-inner p-4">
                <img
                  src={testimonial.img}
                  className="img-fluid"
                  alt="Client"
                />
                <div className="ms-4">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.profession}</p>
                  <div className="d-flex text-primary">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star${
                          i >= testimonial.stars ? " text-body" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-top rounded-bottom p-4">
                <p className="mb-0">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};
