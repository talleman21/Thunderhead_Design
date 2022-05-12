import React from "react";

interface Props {}

const Services = (props: Props) => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider my-4 border-primary" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fa fa-cog fa-4x text-primary mb-4"></i>
              <h3 className="h4 mb-2">CAD DESIGN</h3>
              <p className="text-muted mb-0">With industry leading software and design techniques, let us design your next project</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fa fa-4x fa-paint-brush text-primary mb-4"></i>
              <h3 className="h4 mb-2">VISUALIZATIONS</h3>
              <p className="text-muted mb-0">Dynamic and photoreal.  We aim to create the best visuals for all of our clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fa fa-4x fa-video-camera text-primary mb-4"></i>
              <h3 className="h4 mb-2">MOTION GRAPHICS</h3>
              <p className="text-muted mb-0">Bring your designs to life with amazing detail and accuracy.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fa fa-4x fa-cubes text-primary mb-4"></i>
              <h3 className="h4 mb-2">3D PRINTING</h3>
              <p className="text-muted mb-0">Functional prototypes are our specialty.  Large projects or one off orders.  We have you covered.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
