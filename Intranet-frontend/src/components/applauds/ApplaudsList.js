import { useHistory } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "./Applauds.css"
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import Applauds from "./Applauds";

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
    return (
        <div className="container">
            <div className="row mb-5">
                <OwlCarousel className='owl-theme' {...options} >
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                    <Applauds />
                </OwlCarousel>
            </div>
        </div>
    )
}

export default ApplaudsList;