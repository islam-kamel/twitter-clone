import React from 'react';
import './card.style.css'

const Card = (props) => {
    return (
        <>
             <div class=" card feed_tweet rounded-0 col-12  d-flex flex-row">
            <img src={props.img} alt="" class="img_profile"/>
            <div class="feed_tweet_details">
                <div class="tweeter_details">
                    <a href="#" class="tweeter_name">
                        {props.name}
                        <span >
                           {props.username}
                        </span>
                    </a>
                    <i class="material-icons-outlined icon-0">
                        more_horiz
                    </i>
                </div>
                <div class="tweet_text">
                    <p style={{fontSize:'15px'}}> {props.text}.</p>
                </div>
                <div class="tweet_icons">
                    <i class="material-icons-outlined icon-1">
                        chat_bubble_outline
                    </i>
                    <i class="material-icons-outlined icon-2">
                        restart_alt
                    </i>
                    <i class="material-icons-outlined icon-3">
                        favorite_border
                    </i>
                    <i class="material-icons-outlined icon-4">
                        equalizer
                    </i>
                    <i class="material-icons-outlined icon-5">
                        upload
                    </i>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;
