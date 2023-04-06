import React from "react";
import "./card.style.scss"
import {Link} from "react-router-dom";
import {chart, comment, like, newFollow, replay, share, threeDots} from "../../constants/icons";
import TwDropdown from "../twDropdown/TwDropdown";
import "../main-sidebar/twitter.main.css"

const Card = (props) => {
    return (
        <>
            <div className={"row p-3 border-top gx-0"}>
                <div className={"col-12 me-3"}>
                    <div className={'d-flex '}>
                        <img src={props.img} alt="" className="tw-profile-image  rounded-circle"/>
                        <div className={"d-flex ms-2 justify-content-between align-items-start align-items-start w-100"}>
                            <Link
                                to="#"
                                className="tweeter_name text-decoration-none text-dark"
                            >
                                {props.name}
                                <span className={"text-muted"}> {props.username} </span>
                            </Link>


                            <TwDropdown
                                down={true}
                                toggle={
                                    <TwDropdown.Toggle>{threeDots}</TwDropdown.Toggle>
                                }
                            >
                                <Link
                                    to={"#"}
                                    className={"text-decoration-none dropdown-item-text"}
                                >
                                    <div className={"d-flex align-items-center flex-row-reverse justify-content-center"}>
                                        <i className={"ms-2"} style={{width: 20}}>{newFollow}</i>
                                        <span>Follow {props?.username}</span>
                                    </div>
                                </Link>
                            </TwDropdown>
                        </div>
                    </div>
                </div>
                <div className={"col-11 ms-5 ps-2"}>
                    <div className={"d-flex flex-column"}>
                        <p className={"fw-light"} style={{fontSize: 15}}> {props.text}.</p>
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
