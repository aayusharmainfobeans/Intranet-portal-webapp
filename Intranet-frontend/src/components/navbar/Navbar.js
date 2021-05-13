import React from 'react'
import './Navbar.css'
import logo1 from '../../images/logo-infobeans-white.svg';
import {CgMenuGridR} from 'react-icons/all';
import { IconContext } from "react-icons";

function Navbar() {
 
    return (
        <>
        <div class="header">
        <nav class="navbar  navbar-light">
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
                    <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Message Board</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tides</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Applauds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Jobs</a>
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