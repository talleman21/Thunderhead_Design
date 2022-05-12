import React from "react";

interface Props {}

const Portfolio = (props: Props) => {
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/1.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Aircraft Design</div>
                <div className="project-name">G650 Custom Interior</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/2.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">CAD Design</div>
                <div className="project-name">Walking Robot</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/3.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Interior Rendering</div>
                <div className="project-name">Custom Home</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/4.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Product Rendering</div>
                <div className="project-name">Planetary Gear Section</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/5.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Offshore Visualization</div>
                <div className="project-name">Subsea Scene</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/6.jpg" alt="" />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Product Rendering</div>
                <div className="project-name">Custom Connector</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/7.jpg" alt="" />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Interior Rendering</div>
                <div className="project-name">Texas Kitchen</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/8.jpg" alt="" />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Art</div>
                <div className="project-name">Retro Spaceship</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/9.jpg" alt="" />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Aircraft Design</div>
                <div className="project-name">747-800 VIP Bedroom</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/10.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">3D Printing</div>
                <div className="project-name">Custom Lamp</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" >
              <img className="img-fluid" src="images/thumbnails/11.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">3D Printing</div>
                <div className="project-name">Mustang</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box">
              <img className="img-fluid" src="images/thumbnails/12.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">3D Printing</div>
                <div className="project-name">Yarn Bowl</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UgUlNpAf11c?controls=0" title='demoreel' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RKsO7Few4g0?controls=0" title='lhmarketing' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe width="560" title='aircraft' height="315" src="https://www.youtube.com/embed/8-yaPbian9A?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
          </div>
        </div>
      </div>

      


    </div>
  );
};

export default Portfolio;
