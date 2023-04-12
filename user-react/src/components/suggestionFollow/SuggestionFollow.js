import {verifyBlue} from "../../constants/icons";
import TwButton from "../tw-button/tw-button";
import React from "react";

export function SuggestionFollow(props) {

  return (
    <div className={"trend-card"}>
      <div className="p-4 w-100 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-center ">
          <img
            src={props?.profileImage}
            className="rounded-circle tw-profile-image"
            alt="..."
          />
          <div className="ms-3">
            <div className={"d-flex justify-content-center"}>
              <h6 className={"m-0 fw-bold me-1"}>{props?.fullname}</h6>
              <span className={"text-primary tw-navbar-icon"}>{verifyBlue}</span>
            </div>
            <span className="text-muted fw-light">@{props?.username}</span>
          </div>
        </div>
        <TwButton
          btnStyle={"dark"}
          classes={"rounded-pill"}
        >
          Follow
        </TwButton>
      </div>
    </div>

  );
}
