import React from 'react';
import './card.style.css'
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <>
             <div className=" card feed_tweet rounded-0 col-12  d-flex flex-row">
            <img src={props.img} alt="" className="img_profile"/>
            <div className="feed_tweet_details">
                <div className="tweeter_details">
                    <Link to="#" className="tweeter_name">
                        {props.name}
                        <span >
                           {props.username}
                        </span>
                    </Link>
                    <i className="material-icons-outlined icon-0">
                        more_horiz
                    </i>
                </div>
                <div className="tweet_text">
                    <p style={{fontSize: '15px'}}> {props.text}.</p>
                </div>
                <div className="tweet_icons">
                    <i className="material-icons-outlined icon-1">
                        chat_bubble_outline
                    </i>
                    <i className="material-icons-outlined icon-2">
                        restart_alt
                    </i>
                    <i className="material-icons-outlined icon-3">
                        favorite_border
                    </i>
                    <i className="material-icons-outlined icon-4">
                        equalizer
                    </i>
                    <i className="material-icons-outlined icon-5">
                        upload
                    </i>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;
