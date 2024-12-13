import React from "react";
import blogImg from "../assets/img/blog-1.jpg"

export const BlogSection = () => {
  const blogs = [
    {
      img: `${blogImg}`,
      date: "30 Dec 2025",
      author: "Martin.C",
      comments: "6 Comments",
      title: "Rental Cars how to check driving fines?",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
    },
    {
      img: `${blogImg}`,
      date: "25 Dec 2025",
      author: "Martin.C",
      comments: "6 Comments",
      title: "Rental cost of sport and other cars",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
    },
    {
      img: `${blogImg}`,
      date: "27 Dec 2025",
      author: "Martin.C",
      comments: "6 Comments",
      title: "Document required for car rental",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
    },
  ];

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h1 className="display-5 text-capitalize mb-3">
            Cental<span className="text-primary"> Blog & News</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
              <div className="blog-item">
                <div className="blog-img">
                  <img src={blog.img} className="img-fluid rounded-top w-100" alt="Blog" />
                </div>
                <div className="blog-content rounded-bottom p-4">
                  <div className="blog-date">{blog.date}</div>
                  <div className="blog-comment my-3">
                    <div className="small">
                      <span className="fa fa-user text-primary"></span>
                      <span className="ms-2">{blog.author}</span>
                    </div>
                    <div className="small">
                      <span className="fa fa-comment-alt text-primary"></span>
                      <span className="ms-2">{blog.comments}</span>
                    </div>
                  </div>
                  <a href="#" className="h4 d-block mb-3">
                    {blog.title}
                  </a>
                  <p className="mb-3">{blog.description}</p>
                  <a href="#" className="">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


