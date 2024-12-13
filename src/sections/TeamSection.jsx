import React from "react";
import teamImg from "../assets/img/team-1.jpg"
export const TeamSection = () => {
  const teamMembers = [
    { img: `${teamImg}`, name: "MARTIN DOE", profession: "Profession" },
    { img: `${teamImg}`, name: "MARTIN DOE", profession: "Profession" },
    { img: `${teamImg}`, name: "MARTIN DOE", profession: "Profession" },
    { img: `${teamImg}`, name: "MARTIN DOE", profession: "Profession" },
  ];

  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h1 className="display-5 text-capitalize mb-3">
            Customer<span className="text-primary"> Support</span> Center
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img src={member.img} className="img-fluid rounded w-100" alt="Team Member" />
                </div>
                <div className="team-content pt-4">
                  <h4>{member.name}</h4>
                  <p>{member.profession}</p>
                  <div className="team-icon d-flex justify-content-center">
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

