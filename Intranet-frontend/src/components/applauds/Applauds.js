import React from 'react';
import {FaRegComment,FiThumbsUp} from 'react-icons/all';
import "./Applauds.css";

function Applauds(){
    
    return(
        <>
            <div className="item text-center">
                    <div className="card">
                        <div className="card-body">
                            <div className="image">
                                <img src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg" alt="photo"
                                className="img-fluid rounded-circle w-50 m-3 " />
                            </div>
                            <h4 className="name">Aayush Sharma</h4>
                            <p>Open Source</p>
                            <div className="award-date">
                                <div className="Performence">
                                    <h4 className="title">Star Performer</h4>
                                </div>
                                <div className="date">
                                    <p className="text">7th June</p>
                                </div>
                            </div>
                            <div className="onchange-award">
                                    <p className="title">Aayush</p>
                                    <h4 className="text">Sharma</h4>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <FiThumbsUp />
                                            65
                                        </li>
                                        <li className="list-inline-item">
                                                <FaRegComment />
                                            65
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Applauds;