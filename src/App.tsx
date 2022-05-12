import React from 'react';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.css'
import './Style/css/styles.css'
import './Style/css/App.css';

import Nav from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
