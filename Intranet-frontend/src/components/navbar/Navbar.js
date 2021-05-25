import React from 'react'
import './Navbar.css'
import logo1 from '../../images/logo-infobeans-white.svg';
import {CgMenuGridR} from 'react-icons/all';
import { IconContext } from "react-icons";
import { useHistory,Link } from "react-router-dom";

function Navbar() {
    let history=useHistory();

    const onLogout=()=>{
       localStorage.clear();
       history.push('/login');
    }
 
    return (
        <>
        <div class="header">
        <nav class="navbar sticky-top navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">
                <img
                    src={logo1}
                    alt=""
                    width="128"
                    height="40"
                    class="d-inline-block align-text-down"
                />
                Intranet Portal
                </a>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Message Board</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tides</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/home">Applauds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/getcontacts">Contact List</a>
                </li>
                <li class="nav-item">
                {!localStorage.token && <button type="button" class="btn btn-danger" > <Link to="/login">login</Link></button>}
                </li>
                <li class="nav-item">
                {localStorage.token && <button type="button" class="btn btn-outline-danger" onClick={onLogout}>logout</button>}
                </li>
                <li class="nav-item text-white">
                    <IconContext.Provider value={{size:"2rem", className: "global-class-name" }}>
                        <CgMenuGridR />
                    </IconContext.Provider>
                </li>
            </ul>
            </div>
        </nav>
    </div>   
    </>
    )
}

export default Navbar