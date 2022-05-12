import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-light py-5">
      <div className="container">          
        <div className="row">
          <div className='border border-primary mx-auto' style={{borderRadius:'5px'}}>
            <div className='bg-primary text-white text-center p-2'>Follow us on:</div>
            <div className='m-2 mx-5'>
              <a href='www.facebook.com/thunderheaddesign'>
                <i className='fa fa-facebook mx-2' style={{color:'#3b5998',fontSize:'1.75rem'}}></i>
              </a>
              <a href="https://twitter.com/Thunderhead3D">
                <i className='fa fa-twitter mx-2' style={{color:'#1DA1F2',fontSize:'1.75rem'}}></i>
              </a>
              <a href="https://www.youtube.com/user/Thunderhead3d/feed?activity_view=3">
                <i className='fa fa-youtube mx-2' style={{color:'#FF0000',fontSize:'1.75rem'}}></i>
              </a>
            </div>
          </div>
        </div>
          <div className="small text-center text-muted pt-4">Copyright © 2020 - Thunderhead|<span className='text-primary'>Design</span></div>
      </div>
    </footer>
  );
};

export default Footer;
