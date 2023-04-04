import React from "react";
import "./userSignButton.scss";
import high from "../../Image/high.jpg";
import TwDropdown from "../twDropdown/TwDropdown";
import {threeDots} from "../../constants/icons";
import {Link} from "react-router-dom";


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
    </>);
}

export default UserSignButton;
