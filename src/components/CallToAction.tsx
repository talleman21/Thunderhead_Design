import React from "react";

interface Props {}

const CallToAction = (props: Props) => {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
        <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">
          Download Now!
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
