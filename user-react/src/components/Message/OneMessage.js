import React from "react";
import {threeDots, verifyBlue} from "../../constants/icons";
import {useNavigate} from "react-router-dom";

const OneMessage = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (props?.handleClick) {
      return props?.handleClick({user: props?.user.username, chatId: props?.chatId})
    }
    navigate(props?.user.username, {state: {key: props.chatId}})
  }

  return (
    <>
      <div
        role={"button"}
        onClick={handleClick}
        className={"bg-hover"}>
        <div className={"d-flex flex-column p-3"}>

          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center w-75">
              <img
                src={`${props.user.profile?.image ? process.env.REACT_APP_MEDIA_BASE_URL + props.user.profile.image : 'https://picsum.photos/200/300?grayscale'}`}
                className="rounded-circle tw-profile-image flex-shrink-0"
                alt="..."
              />
              <div className="ms-3 w-75">
                <div className={"d-flex align-items-center "}>
                  <h6 className={"m-0 fw-bold me-1 text-truncate"} style={{maxWidth: "100%"}}>{props?.user.fullname}</h6>
                  <span
                    className="text-muted fw-light text-truncate"
                    style={{maxWidth: "100%"}}
                  >@{props?.user.username}
                  </span>
                  <span className={"text-primary tw-navbar-icon"}>{verifyBlue}</span>
                </div>
                <div className={"d-flex flex-column"}>
                  <span className={"fs-6 text-muted fw-light"}>hello</span>
                </div>
              </div>
            </div>
            <div className={"icon-button"}>
              <div className="icon-bg i-bg-primary">
                {threeDots}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneMessage;
