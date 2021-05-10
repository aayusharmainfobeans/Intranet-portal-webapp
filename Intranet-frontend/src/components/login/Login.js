import React from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";
import logo1 from '../../images/logo-infobeans-white.svg';
import logo2 from '../../images/logo-infobeans-black.svg';

const user={
    email:"aayu8982@gmail.com",
    password:"aayu8982"
}



function Login(){

let history=useHistory();

const loginCheck=(e)=>{
    e.preventDefault();

    
    
    const email= e.target.elements[0].value;
    const password= e.target.elements[1].value;

    if(email===user.email && password===user.password){
        alert('true');
        history.push("/home");
    } else{
        alert('false');
    }
}
    
    return(
    <div>
        <nav className="navbar navbar-light">
            <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
                <img src={logo1} alt="" width="128" height="40" className="d-inline-block align-text-down" />
                Intranet Portal
            </a>
            </div>
        </nav>
        <div className="login-container">
            <form className="login-content" onSubmit={loginCheck}>
                <div className="login-img">
                    <img src={logo2} alt="Infobeans-white" />
                </div> 
                <div className="form-field">
                    <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Your InfoBeans email address" />
                </div>
                <div className="form-field">
                    <label className="form-label stretch">Password <a href="#">Forgot?</a></label>
                        <input type="text" className="form-control" placeholder="Your password" />
                </div>
                <div className="form-field">
                    <button className="button inverse full-width" >Login to Intranet Portal</button>
                </div>
            </form>
        </div>
        <div className="footer">
                &copy; Copyright 2020 InfoBeans. All Rights Reserved.
        </div>
    </div>
    )
}

export default Login;