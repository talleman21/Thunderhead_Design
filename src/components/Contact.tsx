import React from "react";

interface Props {}

const Contact = (props: Props) => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Ready to bring your ideas to life?</h2>
            <hr className="divider my-4 border-primary" />
            <p className="text-muted mb-5">Give us a call or email and have us quote your next project.</p>
          </div>
        </div>

        <div className="col-lg-6 m-auto">
          <form action="https://formspree.io/xgennqzn" method="POST">
            <div className="form-group">
              <label>Name: </label>
              <input type="text" className='form-control' name="name" placeholder='your name'/>
            </div>
            <div className="form-gorup">
              <label>Email:</label>
              <input type="email" className='form-control' name="_replyto" placeholder='your email' />
            </div>
            <div className="form-gorup">
              <label>Message:</label>
              <textarea className='form-control' name="_message" placeholder='your message here' />
            </div>

            <div className="btn-group my-3 w-100">
              <button type="submit" className='btn btn-primary w-100 ' >Send Email</button>
            </div>
          </form>
          {/* <i className="fa fa-envelope fa-3x mb-3 text-primary"></i>
          <a className="d-block" style={{textDecoration:'none',color:'black'}} href="mailto:alleman@thunderheaddesign.net">
            alleman@thunderheaddesign.net
          </a> */}
        </div>
        <hr className='divider border-primary mt-1' />
        <div className='mx-auto col-sm-6'>
          <a href="tel:+1-713-854-5102" className='btn btn-primary w-100'  >
            <i className="fa fa-phone fa-2x text-white" ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
