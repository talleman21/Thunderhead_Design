import React,{useState} from "react";
import {Link} from 'react-scroll'
import {Nav,NavItem,NavLink,Collapse} from 'reactstrap'

interface Props {}

const Navbar = (props: Props) => {

  const [isOpen,setIsOpen] = useState(false)

  const scrollToDiv = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    window.scrollTo(0,4000)
    // console.log(e.target.href)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-1" style={{background:'rgba(255,255,255,.9'}} id="mainNav">
      <div className="container">
      <Link  className='navbar-brand text-dark' style={{fontFamily: 'Lato, sans-serif',textShadow:'1px 1px 10px white',cursor:'default'}} to="header" spy={true} smooth={true} duration='1000' delay={250} >THUNDERHEAD|<span className='text-primary'>DESIGN</span></Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          onClick={()=>setIsOpen(!isOpen)}
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id='button'
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Collapse className="" navbar isOpen={isOpen} id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0" style={{fontWeight:100}}>
            <li className="nav-item">
              <Link  className='nav-link text-dark' style={styles.link} to="about"  smooth={true} duration='1000' delay={250} >About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" style={styles.link} to="services"  smooth={true} duration='1000' delay={250}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" style={styles.link} to="portfolio"  smooth={true} offset={-100} duration='1000' delay={250} >Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" style={styles.link} to="contact"  smooth={true} duration='1000' delay={250} >
                Contact
              </Link>
            </li>
          </ul>
        </Collapse>
      </div>
    </nav>
  );
};

const styles = {
  link:{
    fontSize:'1.25rem',
    textShadow:'0 0 5px white',
    fontWeight:400
  }
}

export default Navbar;
