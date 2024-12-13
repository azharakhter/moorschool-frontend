import React from "react";
import OwlCarousel from "react-owl-carousel";
import car1 from "../assets/img/car-1.png";
import car2 from "../assets/img/car-2.png";
import car3 from "../assets/img/car-3.png";
import car4 from "../assets/img/car-4.png";

export const TestCategoires = () => {
  const categories = [
    {
      img: car1,
      title: "Mercedes Benz R3",
      review: 4.5,
      price: "$99:00/Day",
      details: [
        { icon: "fa-users", text: "4 Seat" },
        { icon: "fa-car", text: "AT/MT" },
        { icon: "fa-gas-pump", text: "Petrol" },
      ],
    },
    {
      img: car2,
      title: "Toyota Corolla Cross",
      review: 3.5,
      price: "$128:00/Day",
      details: [
        { icon: "fa-users", text: "4 Seat" },
        { icon: "fa-car", text: "AT/MT" },
        { icon: "fa-gas-pump", text: "Petrol" },
      ],
    },
    {
      img: car3,
      title: "Tesla Model S Plaid",
      review: 3.8,
      price: "$170:00/Day",
      details: [
        { icon: "fa-users", text: "4 Seat" },
        { icon: "fa-car", text: "AT/MT" },
        { icon: "fa-gas-pump", text: "Petrol" },
      ],
    },
    {
      img: car4,
      title: "Hyundai Kona Electric",
      review: 4.8,
      price: "$187:00/Day",
      details: [
        { icon: "fa-users", text: "4 Seat" },
        { icon: "fa-car", text: "AT/MT" },
        { icon: "fa-gas-pump", text: "Petrol" },
      ],
    },
  ];

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    items: 3,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <div className="container-fluid categories pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Vehicle <span className="text-primary">Categories</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum, excepturi
            quia tempora cupiditate! Adipisci facilis modi quisquam quia
            distinctio.
          </p>
        </div>

        <OwlCarousel className="categories-carousel owl-carousel" {...options}>
          {categories.map((category, index) => (
            <div key={index} className="categories-item p-4">
              <div className="categories-item-inner">
                <div className="categories-img rounded-top">
                  <img
                    src={category.img}
                    className="img-fluid w-100 rounded-top"
                    alt={category.title}
                  />
                </div>
                <div className="categories-content rounded-bottom p-4">
                  <h4>{category.title}</h4>
                  <div className="categories-review mb-4">
                    <div className="me-3">{category.review} Review</div>
                    <div className="d-flex justify-content-center text-secondary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i + 1 > category.review ? "text-body" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                      {category.price}
                    </h4>
                  </div>
                  <div className="row gy-2 gx-0 text-center mb-4">
                    {category.details.map((detail, i) => (
                      <div
                        key={i}
                        className={`col-4 ${
                          i !== category.details.length - 1
                            ? "border-end border-white"
                            : ""
                        }`}
                      >
                        <i className={`fa ${detail.icon} text-dark`}></i>{" "}
                        <span className="text-body ms-1">{detail.text}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};
