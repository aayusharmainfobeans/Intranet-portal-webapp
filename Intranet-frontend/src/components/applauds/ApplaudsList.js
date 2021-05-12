import { useHistory } from "react-router-dom";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import "./Applauds.css"
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import Applauds from "./Applauds";
import { useEffect, useState } from "react";

const options = {
    nav: true,
    items: 4,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 4
        },
        1200: {
            items: 4
        }
    }

}

function ApplaudsList() {
    let history=useHistory();

    if(!sessionStorage.token){
        history.push("/login")
    }
    
    var [applauds, setApplauds] =useState([])

    useEffect(()=>{
        axios({
            url: "http://localhost:8000/api/home",
            method:"GET",
        }).then((response)=>{
            console.log('api data is ',response.data.data);
            setApplauds(response.data.data)
        },(error)=>{
            console.log('erroe is ',error);
        })
    },[])


    return (
        <div className="container">
            <div className="row mb-5">
                {applauds.length>0 &&(<OwlCarousel className='owl-theme' {...options} >
                    {applauds.map(function(each){
                        console.log("each",each);
                        return <Applauds  data={each} key={each._id} />
                    })}
                </OwlCarousel>)}
            </div>
        </div>
    )
}

export default ApplaudsList; 