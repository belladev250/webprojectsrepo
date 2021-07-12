import React from 'react';
import '../styles/style.css'


function Register(){



    return(

       
           <div className="body">

            <div className="form">
                <input type="text" name=" " required autoComplete="off"/>
                <label htmlFor="firstname" className="label-name">
                    <span className="content-name">firstname*</span>
                </label>
            </div>


           </div>
        
    );

}


export default Register;