import React from 'react';
import {FaRegComment,FiThumbsUp} from 'react-icons/all';
import "./Applauds.css";

function Applauds(props){
    console.log("props",props.data);
    return(
        <div>
            <div className="item text-center">
                    <div className="card">
                        <div className="card-body">
                            <div className="image">
                                <img src={props.data.avatar} alt="photo"
                                className="img-fluid rounded-circle w-50 m-3 " />
                            </div>
                            <h4 className="name">{props.data.name}</h4>
                            <p>{props.data.position}</p>
                            <div className="award-date">
                                <div className="Performence">
                                    <h4 className="title">{props.data.award}</h4>
                                </div>
                                <div className="date">
                                    <p className="text">{props.data.awardDate}</p>
                                </div>
                            </div>
                            <div className="onchange-award">
                                    <p className="title">{props.data.awardHover}</p>
                                    <h5 className="text">{props.data.awardDateHover}</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <FiThumbsUp />
                                            {props.data.likes}
                                        </li>
                                        <li className="list-inline-item">
                                                <FaRegComment />
                                                {props.data.comments}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Applauds;