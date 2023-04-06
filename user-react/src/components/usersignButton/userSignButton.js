import React from "react";
import "./userSignButton.scss";
import TwDropdown from "../twDropdown/TwDropdown";
import {threeDots} from "../../constants/icons";
import {Link} from "react-router-dom";
import {UserIdentity} from "../../hooks/useCurrentUser";

const UserSignButton = (props: { userInfo: UserIdentity }) => {
    return (
        <div className="mb-0" style={{paddingTop: "3"}}>
            <div role={"button"} className="user-box mb-5 px-2">
                <img
                    src={`${process.env.REACT_APP_BASE_URL + "/api" + props?.userInfo?.image}`}
                    className="rounded-circle float-start tw-profile-image"
                    alt="..."
                />
                <div className="mt-1 user-box-info">
                    <h5 className="m-0">{props?.userInfo?.fullname}</h5>
                    <small className="text-body-secondary">@{props?.userInfo?.username}</small>
                </div>
                <div className="dropstart d-none d-xl-flex flex-column align-items-end mt-2 user-box-dropdown">

                    <TwDropdown
                        down={false}
                        classes={"tw-dropdown-top-center tw-dropdown-arrow-down"}
                        toggle={
                            <TwDropdown.Toggle>{threeDots}</TwDropdown.Toggle>
                        }
                    >
                        <Link to={"#"} className={"text-decoration-none dropdown-item-text"}>Logout @moustaf37510</Link>
                        <Link to={"#"} className={"text-decoration-none dropdown-item-text"}>Logout @moustaf37510</Link>
                        <Link to={"#"} className={"text-decoration-none dropdown-item-text"}>Logout @moustaf37510</Link>
                        <Link to={"#"} className={"text-decoration-none dropdown-item-text"}>Logout @moustaf37510</Link>
                    </TwDropdown>
                </div>
            </div>
        </div>
    );
}

export default UserSignButton;
