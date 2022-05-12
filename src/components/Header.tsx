import React from "react";

interface Props {}

const Header = (props: Props) => {
  return (
    <header className="masthead" id='header'>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center ">
          <div className="d-none  col-lg-8 align-self-end  m-3 px-5 py-2 border-primary" style={{background:'rgba(255,255,255,.4)'}}>
            <div className=" text-uppercase d-flex justify-content-center text-dark p-0" style={{fontFamily:'Lato',fontSize:'3rem',fontWeight:100}}>
              <div>
                DESIGN | 
              </div>
              <div className='text-primary mx-1'>
                Render 
              </div>
              <div>
                | Print
              </div>
            </div>
          </div>
          <div className="col-lg-8 align-self-baseline">
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
