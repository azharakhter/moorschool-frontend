


export const FormSection = () => {
    return (
        <>
            <section className="ftco-section ftco-no-pt bg-light">
  <div className="container">
    <div className="row no-gutters">
      <div className="col-md-12 featured-top">
        <div className="row no-gutters">
          <div className="col-md-4 d-flex align-items-center">
            <form action="#" className="request-form ftco-animate bg-primary">
              <h2>Make your trip</h2>
              <div className="form-group">
                <label className="label">Pick-up location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City, Airport, Station, etc"
                />
              </div>
              <div className="form-group">
                <label className="label">Drop-off location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City, Airport, Station, etc"
                />
              </div>
              <div className="d-flex">
                <div className="form-group mr-2">
                  <label className="label">Pick-up date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="book_pick_date"
                    placeholder="Date"
                  />
                </div>
                <div className="form-group ml-2">
                  <label className="label">Drop-off date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="book_off_date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="label">Pick-up time</label>
                <input
                  type="text"
                  className="form-control"
                  id="time_pick"
                  placeholder="Time"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Rent A Car Now"
                  className="btn btn-secondary py-3 px-4"
                />
              </div>
            </form>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="services-wrap rounded-right w-100">
              <h3 className="heading-section mb-4">
                Better Way to Rent Your Perfect Cars
              </h3>
              <div className="row d-flex mb-4">
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-route"></span>
                    </div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Choose Your Pickup Location</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-handshake"></span>
                    </div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Select the Best Deal</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-rent"></span>
                    </div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Reserve Your Rental Car</h3>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <a href="#" className="btn btn-primary py-3 px-4">
                  Reserve Your Perfect Car
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

           
        </>
    )
}