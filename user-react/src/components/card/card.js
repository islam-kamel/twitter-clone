import React from "react";
import "./card.style.scss"
import {Link} from "react-router-dom";
import {chart, comment, like, replay, share, threeDots} from "../../constants/icons";

const Card = (props) => {
    return (
        <>
            <div className={"row p-3 border-top gx-0"}>
                <div className={"col-1 me-3"}>
                    <img src={props.img} alt="" className="tw-profile-image  rounded-circle"/>
                </div>
                <div className={"col"}>
                    <div className={"d-flex align-self-start justify-content-between align-items-center"}>
                        <Link
                            to="#"
                            className="tweeter_name text-decoration-none text-dark"
                        >
                            {props.name}
                            <span className={"text-muted"}> {props.username} </span>
                        </Link>
                        <span className="icon-0 icon"> {threeDots} </span>
                    </div>
                    <div className={"d-flex flex-column"}>
                        <p className={""}> {props.text}.</p>
                        <div className="tweet_icons text-muted">
                            <div className={"icon"}>
                                <i className={"icon icon-1"}>{comment}</i>
                                <span className={"ms-1"}>300</span>
                            </div>

                            <div className={"icon"}>
                                <i className={"icon-2 icon"}>{replay}</i>
                                <span className={"ms-1"}>300</span>
                            </div>

                            <div className={"icon"}>
                                <i className={"icon-3 icon"}>{like}</i>
                                <span className={"ms-1"}>300</span>
                            </div>

                            <div className={"icon"}>
                                <i className={"icon-4 icon"}>{chart}</i>
                                <span className={"ms-1"}>300</span>
                            </div>
                            <div className={"icon"}>
                                <i className={"icon-5 icon"}>{share}</i>
                                <span className={"ms-1"}>300</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
