import React from "react";
import "./cardDown.css"
import {useTranslation} from "react-i18next";
const CardDown = (props) => {
  const [t , translate]= useTranslation();
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
        <button className="tweet_button rounded-pill border-0 ">{t("explore.how_follow_f")}</button>
      </div>
    </>
  );
}

export default CardDown;
