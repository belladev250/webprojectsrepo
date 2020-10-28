import React from 'react';
import '../styles/login.css';
import user from '../images/user.png'




function Login() {

   return(
 <div>
<div className="box">

  <img src={user} alt="user" width="130" height="130" className="user"/>
    
    <h4 style={{marginLeft:'-1em',marginBottom:'1em'}}>Login</h4>
    <div className="login-form">
      <input type="text" name="" autoComplete="off"  required/>
      <label htmlFor="Email" className="name-label">
        <span className="name-content"> Email </span>
      </label>
    </div>
    <div className="login-form">
      <input type="password" name="" autoComplete="off"   required/>
      <label htmlFor="password" className="name-label">
        <span className="name-content"> Password</span>
      </label>
    </div>

    <button className="button">
      Login
    </button>

    {/* <p className="paragraph">Don't have an account?</p> */}
</div>

 <div className="login" >    
     <svg style={{ marginLeft:'-18em',marginTop:'-26em'}} height="400" width="400">
      <circle cx="250" cy="250" r="150"  fill="white" className="circle" /><br/>
    </svg>
    
    <svg  style={{marginLeft:' 30em' ,marginTop:'10em'}} height="400" width="400">
      <circle cx="250" cy="250" r="150"  fill="white" className="circle" />
    </svg>

</div>






       </div>
     
  );
}

export default Login;


