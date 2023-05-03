import React from "react";
import "./userSignButton.scss";
import TwDropdown from "../twDropdown/TwDropdown";
import {threeDots} from "../../constants/icons";
import {Link} from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import {useSelector} from "react-redux";

const UserSignButton = ({toggle}) => {
  const logout = useLogout();
  const userInfo = useSelector(state => state.currentUser.userProfile);

  return (
    <div className="mb-0 " style={{paddingTop: "3"}}>
      <div role={"button"} className="user-box mb-5 p-0">
        <img
          src={`${process.env.REACT_APP_BASE_URL + "/api" + userInfo.profile?.image}`}
          className="rounded-circle float-start tw-profile-image"
          alt="..."
        />
        <div className="mt-1 user-box-info">
          <h5 className="m-0">{userInfo?.fullname}</h5>
          <small className="text-body-secondary">@{userInfo?.username}</small>
        </div>
        <div className="dropstart d-none d-xl-flex flex-column align-items-end mt-2 user-box-dropdown">

          <TwDropdown
            down={false}
            classes={"tw-dropdown-top-center tw-dropdown-arrow-down mb-5"}
            toggle={ toggle || <TwDropdown.Toggle>{threeDots}</TwDropdown.Toggle> }
          >
            <Link
              to={`profile/${userInfo?.username}`}
              className="tw-navbar-link d-flex align-items-center text-dark text-decoration-none dropdown-item-text"
            >
              <span className={"text-bold"}>Profile @{userInfo?.username}</span>
            </Link>
            <Link
              onClick={logout}
              to={"#"}
              className={"text-decoration-none dropdown-item-text"}
            >
              <span className={"text-danger"}>Logout @{userInfo?.username}</span>
            </Link>
          </TwDropdown>
        </div>
      </div>
    </div>
  );
}

export default UserSignButton;
