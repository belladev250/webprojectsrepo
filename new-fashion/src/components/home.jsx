import React from 'react';
import './../styles/home.css';
import {Link} from 'react-router-dom';
import {GoArrowSmallRight} from'react-icons/go';
import logo from './../images/logo.png';
import './../styles/nav.css';




function Home() {

  const Styles={
    color:'white',
    textDecoration:'none'   

  }

  const Style ={
    textDecoration: 'none'
  }
  return (
   

  <div>
   <header className="header ">
    <nav className= 'navbar navbar-expand-lg navbar-light   ' >
            <li className="navbar-brand "  ><img src={logo} alt=""/> </li>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul  className="navbar-nav ml-auto links">
              <Link style={Style} to='/'>
                <li className="nav-item  nav-link link " >Home </li>
                </Link>
          
              <Link  style={Style} to='/about'>
                <li className="nav-item  nav-link link">About </li>
                </Link>
                <Link  style={Style} to='/blog'>
                <li className="nav-item  nav-link link">Collection</li>
                </Link>
                <Link  style={Style}  to='/contact'>
                <li className="nav-item  nav-link link ">Contact </li>
                </Link>
                <Link  style={Style}  to='/login'>
                <li className="nav-item  nav-link link ">Login</li>
                </Link>
               
              </ul>
            </div>
          </nav>

          <h3 className="headers">Welcome to BFQ</h3>
   <Link style={Styles}   to="/about">
    <p className="about"> About us<GoArrowSmallRight className="iconic"/></p> 
     </Link>
            </header>
            
  

  
     </div> 
  );

 
}

export default Home;
