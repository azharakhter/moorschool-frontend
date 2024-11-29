


export const ServicesSection = () => {
    return (
        <>
         <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-md-7 text-center heading-section ftco-animate">
        <span className="subheading">Services</span>
        <h2 className="mb-3">Our Latest Services</h2>
      </div>
    </div>
    <div className="row">
      {[
        {
          icon: "flaticon-wedding-car",
          title: "Wedding Ceremony",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          icon: "flaticon-transportation",
          title: "City Transfer",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          icon: "flaticon-car",
          title: "Airport Transfer",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          icon: "flaticon-transportation",
          title: "Whole City Tour",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
      ].map((service, index) => (
        <div className="col-md-3" key={index}>
          <div className="services services-2 w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className={service.icon}></span>
            </div>
            <div className="text w-100">
              <h3 className="heading mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        </>
    )
}