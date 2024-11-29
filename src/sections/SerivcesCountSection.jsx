

export const ServicesCountSection = () => {
    return (
        <>
        <section
  className="ftco-counter ftco-section img bg-light"
  id="section-counter"
>
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      {[
        { number: 60, label: "Year Experienced" },
        { number: 1090, label: "Total Cars" },
        { number: 2590, label: "Happy Customers" },
        { number: 67, label: "Total Branches" },
      ].map((counter, index) => (
        <div
          className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate"
          key={index}
        >
          <div className="block-18">
            <div
              className={`text ${
                index !== 3 ? "text-border" : ""
              } d-flex align-items-center`}
            >
              <strong className="number" data-number={counter.number}>
                0
              </strong>
              <span>
                          {counter.label.split(" ").map((line, i) => (
                    <>
                    {line}
                    <br />           
                    </>
                 
                ))}
              </span>
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