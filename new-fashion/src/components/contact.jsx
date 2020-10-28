import React from 'react';
import Nav from './../components/navbar';
import '../styles/contact.css';



function Contact() {
  return (
   
   <div>

<header className="contact">
  <h1 style={{color:'white',padding:'250px 0px'}} >Contact us</h1>
</header>

<div className="space"></div>

<div className="body">
<p style={{fontSize:"30px",fontWeight:'bold',marginTop:'1em',color:'#040624'}}>Get in touch!!</p>

 <div className="form">
   <input type ='text' name=""  autoComplete="off" required/>
   <label for ="firstname"  className="label-name">
   <span className="content-name">FirstName*</span>
 </label>
 </div>
 
 
 <div className="form">
 <input type ='text' name=""  autoComplete="off" required/>
   <label for ="lastname"  className="label-name">
   <span className="content-name">LastName*</span>
 </label>
 </div>

 <div className="form">
 <input type ='email' name=" "  autoComplete="off" required/>
   <label for ="email"  className="label-name">
   <span className="content-name">Email Address*</span>
 </label>
 </div>

 
 <div className="form">
 <input type ='tel' name=" "  autoComplete="off" required/>
   <label for ="telephone"  className="label-name">
   <span className="content-name">Telephone*</span>
 </label>
 </div>
 
 <div className="form">
 <input type ='text' name=" "  autoComplete="off" required/>
   <label for ="message"  className="label-name">
   <span className="content-name">Message*</span>
 </label>
 </div>

 <button  className="but" >Submit</button>


  </div>
 <Nav/>
   </div>
   
  );
}

export default Contact;
