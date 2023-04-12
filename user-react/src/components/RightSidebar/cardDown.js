import React from "react";
import "./cardDown.css"

const CardDown = (props) => {
  return (
    <>
      <div class="follow_profile d-flex justify-content-between align-items-center">
        <div class="follow_cont d-flex justify-content-between ">
          <img src={props.img} alt="img" class="rounded-circle  img_profile"/>
          <div class="follow_details d-flex flex-column">
            <a href="#">
              {props.name}
            </a>
            <span> {props.username} </span>
          </div>
        </div>
        <button class="tweet_button rounded-pill border-0 ">Follow</button>
      </div>
    </>
  );
}

export default CardDown;
