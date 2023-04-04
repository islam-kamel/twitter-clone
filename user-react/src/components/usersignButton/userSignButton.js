import React from "react";
import "./userSignButton.scss";
import high from "../../Image/high.jpg";
import {UserSignDropdown} from "../TrendsOpenion/trendsOpinion";


const UserSignButton = () => {
    return (<>
        <div className="" style={{paddingTop: "3"}}>
            <div role={"button"} className="user-box">
                <img
                    src={high}
                    className="rounded-circle float-start tw-profile-image"
                    alt="..."
                />
                <div className="mt-1 user-box-info">
                    <h5 className="">moustafa</h5>
                    <small className="text-body-secondary">@moustaf37510</small>
                </div>
                <div className="dropstart d-none d-xl-flex flex-column align-items-end mt-2 user-box-dropdown">
                    <UserSignDropdown
                        className="trends-option fw-bolder "
                        addAccount="Add an existing account"
                        logOut="Log out @moustaf37510"
                    />
                </div>
            </div>
        </div>
    </>);
}

export default UserSignButton;
