import React from "react";
import "./cardDown.css"

const CardDown = (props) => {
  return (
    <>
      <div className="follow_profile d-flex justify-content-between align-items-center">
        <div className="follow_cont d-flex justify-content-between ">
          <img src={props.img} alt="img" className="rounded-circle  img_profile"/>
          <div className="follow_details d-flex flex-column">
            <a href="#">
              {props.name}
            </a>
            <span> {props.username} </span>
          </div>
        </div>
        <button className="tweet_button rounded-pill border-0 ">Follow</button>
      </div>
    </>
  );
}

export default CardDown;
