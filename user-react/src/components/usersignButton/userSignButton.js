import React from "react";
import "./userSignButton.scss";
import TwDropdown from "../twDropdown/TwDropdown";
import {threeDots} from "../../constants/icons";
import {Link} from "react-router-dom";
import {UserIdentity} from "../../hooks/useCurrentUser";
import useLogout from "../../hooks/useLogout";

const UserSignButton = (props: { userInfo: UserIdentity }) => {
    const logout = useLogout();

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
                        classes={"tw-dropdown-top-center tw-dropdown-arrow-down mb-5"}
                        toggle={
                            <TwDropdown.Toggle>{threeDots}</TwDropdown.Toggle>
                        }
                    >
                        <Link
                            to={`profile/${props?.userInfo?.username}`}
                            className="tw-navbar-link d-flex align-items-center text-dark text-decoration-none dropdown-item-text"
                        >
                            <span className={"text-bold"}>Profile @{props?.userInfo?.username}</span>
                        </Link>
                        <Link
                            onClick={logout}
                            to={"#"}
                            className={"text-decoration-none dropdown-item-text"}
                        >
                            <span className={"text-danger"}>Logout @{props?.userInfo?.username}</span>
                        </Link>
                    </TwDropdown>
                </div>
            </div>
        </div>
    );
}

export default UserSignButton;
