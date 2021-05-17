import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";
import logo1 from '../../images/logo-infobeans-white.svg';
import logo2 from '../../images/logo-infobeans-black.svg';
import {CgMenuGridR} from 'react-icons/all';
import { IconContext } from "react-icons";
import axios from 'axios';


function Login(){

    let history=useHistory();
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState();
    const [passwordErr,setPassErr]=useState();

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
        if(email==0){
            setMessage();
        }
    }
    
    const validatePasswordSyntax = (e) =>{
        e.preventDefault();
        const password =e.target.value;
        if(checkPassword(password)){
            setIsValid(true);
            setPassErr();
        }else{
            setIsValid(false);
            setPassErr('Invalid Password min 8 letter password, with at least a symbol, upper and lower case letters and a number');
        }
       if(password==0){
        setPassErr();
       }
    }
    
    
const loginCheck=(e)=>{
    e.preventDefault();
    
    const email= e.target.elements[0].value;
    const password= e.target.elements[1].value;
    
    axios.post('http://localhost:8000/api/signin',{email:email,password:password})
    .then((response)=>{
    console.log(response.data.data)
    if(response.data.data){
    sessionStorage.setItem("token",response.data.data)
    history.push("/home")
    }
   else{
     alert("invalid credential")
    }
})
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
                        <input type="password" className="form-control" placeholder="Your password" onChange={(e)=>validatePasswordSyntax(e)} />
                        <div className={`message ${isValid ? 'success' : 'error'}`}>{passwordErr}</div>
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