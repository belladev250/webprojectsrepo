import React from 'react';
import './../styles/about.css';
import Nav from './../components/navbar';
import bella from './../images/bella.jpg';

function About() {
  return (
    <div>
    <header className="bg">
 

    <h1 className="color">About Us</h1>

   
    
   </header>
<div>
   <img src={bella}  className="img" alt="bella" height="300px" width="450px"/>
   <p style={{fontSize:'2em',fontWeight:'bold'}}>What we do</p>
   <p style={{fontSize:'2em',textAlign:"justify",marginRight:'1em',marginBottom:'1.5em',marginTop:'1em'}}>
     Bella fashion is the agency which sells best shoes
     to all kinds of gender based on the latest mordern 
     fashion trends. you can shop online from our store and we ship
     your product at any time wherever you are in this world.
   </p>
   
   </div>
   
    
    


<Nav className=" navbar"/>
   </div>
  );
}

export default About;
