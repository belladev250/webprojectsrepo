import logo from './../images/logo.png';
import './../styles/nav.css';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {AiOutlineLogin} from 'react-icons/ai';
class Nav extends Component{

    constructor(){
      super();

      this.state={
        scrolled:false,
       }

    }
    
      
       componentDidMount(){
         window.addEventListener('scroll',()=>{
           const isTop= window.scrollY<100;
           if(isTop !== true){
             this.setState({scrolled:true})
           }else{
             this.setState({scrolled:false})
           }
         })
       }

       componentWillUnmount(){
         window.removeEventListener('scroll',null);
       }
    render(){


        const Style ={
            textDecoration: 'none',
            color:"white",
            listStyleType:'none',
           
          }
          

        return(


            <div>
    

            <header >
              <nav className= {this.state.scrolled ?'navbar navbar-expand-lg navbar-light bg-dark fixed-top shadow ': 'navbar navbar-expand-lg navbar-light fixed-top' } >
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
                <li className="nav-item  nav-link link ">Login <AiOutlineLogin/></li>
                </Link>
               
              </ul>
            </div>
          </nav>
            </header>

            <footer className="footer ">
            
              <div style={{color:'white'}} className="content"> Explore
              <Link style={Style} to='/'>
                <li className="lists" >Home </li>
                </Link>
          
              <Link  style={Style} to='/about'>
                <li  className="lists" >About </li>
                </Link>
                <Link  style={Style} to='/blog'>
                <li  className="lists" >Collection</li>
                </Link>
                <Link  style={Style}  to='/contact'>
                <li  className="lists">Contact </li>
                </Link>
               
              </div>
              <div style={{color:'white'}} className="content"> Help & FAQS
                <li className="list">Online Shopping</li>
                <li className="list"> Shipping</li>
                <li className="list"> Billing</li>
                <li className="list">Accessibily</li>
              
              </div>
              <div style={{color:'white'}}className="content"> BFQ
              <li className="list">My account</li>
                <li className="list"> Order status</li>
                <li className="list"> Download app</li>
                <li className="list">Unlimitted Shipping</li>
              
              </div>
              <div style={{color:'white'}} className="content">Ways to shop
                 <li className="list">Mobile Money</li>
                <li className="list"> Paypal</li>
                <li className="list"> Visa </li>
                <li className="list">Master card</li>
                </div>

                <hr
              style={{
            color: 'grey',
            backgroundColor:'grey',
            borderStyle:'dotted',
            width:'1000px',
            
            height: '-0.1px'
              }}
              />

              <p style={{color:'white',
            textAlign:'center'}}>BellaFashion&copy;2020</p>
                </footer>

          </div>



            
        );
    }
}

export default Nav
