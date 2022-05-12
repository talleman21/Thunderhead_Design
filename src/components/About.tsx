import React from "react";

interface Props {}

const About = (props: Props) => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Thunderhead Design knows 3D</h2>
            <hr className="divider light my-4" />
            <p className="text-white-50 mb-4" style={{fontSize:'1.25rem'}}>
              Need to bring an idea to life?  We can help you with that.  From design to prototype, Thunderhead Design is your partner of choice.  
            </p>
            {/* <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">
              V
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
