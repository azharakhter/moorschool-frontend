import React from "react";
import OwlCarousel from "react-owl-carousel";

import carouelImg from "../assets/img/testimonial-1.jpg";

export const Testimonial = () => {
  const testimonials = [
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "John Murphy",
      profession: "Student",
      stars: 5,
      review:
        "Moor Driving School made learning to drive an absolute breeze! The instructors are so patient and professional. I passed my driving test on the first try thanks to their guidance. Highly recommend!",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Emily O'Connor",
      profession: "Teacher",
      stars: 4,
      review:
        "Great experience learning to drive! The lessons were well-structured, and my instructor made sure I was confident on the road. I feel much more prepared now. Thank you!",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "David Byrne",
      profession: "Engineer",
      stars: 3,
      review:
        "Good driving school with knowledgeable instructors. I had to reschedule a couple of lessons, which was slightly inconvenient, but overall, the teaching quality was great.",
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
    <div className="container-fluid testimonial pb-5 mt-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
          What Our<span className="text-primary">Clients Say</span>
          </h1>
          <p className="mb-0">
          Our clients love the personalized approach, professional guidance, and supportive learning environment we provide. With expert instructors and tailored lessons, we’ve helped countless learners feel confident and safe on the road. Don’t just take our word for it—hear what our happy clients have to say!
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
