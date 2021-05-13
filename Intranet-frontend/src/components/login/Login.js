import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";
import logo1 from '../../images/logo-infobeans-white.svg';
import logo2 from '../../images/logo-infobeans-black.svg';
import {CgMenuGridR} from 'react-icons/all';
import { IconContext } from "react-icons";

const user={
    email:"aayu8982@gmail.com",
    password:"aayu8982"
}

function Login(){

    let history=useHistory();
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState();

    if(sessionStorage.token){
        history.push("/");
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function checkPassword(password)
    {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }

    const validateEmailSyntax = (e)=>{
        e.preventDefault();
        const email =e.target.value;
        console.log(email);
        if(validateEmail(email)){
            setIsValid(true);
            setMessage();
        }else{
            setIsValid(false);
            setMessage('Invalid email Syntax');
        }
    }

    
    
const loginCheck=(e)=>{
    e.preventDefault();
    
    const email= e.target.elements[0].value;
    const password= e.target.elements[1].value;
    
    if(email===user.email && password===user.password){
        sessionStorage.setItem('token','asgayuhsdfajk');
        history.push("/home");
    } else{
        alert('invalid email password');
    }
}
    
    return(
    <div className="logincontainer">
        <nav className="navbar navbar-light">
            <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
                <img src={logo1} alt="" width="128" height="40" className="d-inline-block align-text-down" />
                Intranet Portal
            </a>
            <ul class="nav justify-content-end">
            <li class="nav-item text-white">
            <IconContext.Provider value={{size:"2rem", className: "global-class-name" }}>
            <CgMenuGridR />
            </IconContext.Provider>
            </li>
            </ul>
            </div>
        </nav>
        <div className="login-container">
            <form className="login-content" onSubmit={loginCheck}>
                <div className="login-img">
                    <img src={logo2} alt="Infobeans-white" />
                </div> 
                <div className="form-field">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="Your InfoBeans email address" onChange={(e)=>validateEmailSyntax(e)} />
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>

                </div>
                

                <div className="form-field">
                    <label className="form-label stretch">Password <a href="#" id="forgot">Forgot?</a></label>
                        <input type="password" className="form-control" placeholder="Your password" />
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