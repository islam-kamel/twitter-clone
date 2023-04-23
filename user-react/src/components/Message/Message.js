import React, {useRef, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import authGuard from "../../guards/authGuard";
import Header from "../header/header";
import "./Message.css"
import OneMessage from "./OneMessage";
import {useChatInfo} from "../../hooks/chat-hooks/chatHooks";
import ChatList from "./chatList";


const Message = () => {
  const {userInfo, usersProfiles, chatsList} = useChatInfo()
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const searchInput = useRef(null);

  const handleShowPlaceholder = () => {
    if (!searchInput.current.value) {
      setShowPlaceholder(!showPlaceholder);
    }
  }

  return (
    <>
      <div className={"row m-0 p-0"} style={{height: "100vh"}}>
        <div className={"col-12 p-0 border border-end-0 col-xl-6 h-100 z-0 "}>
          <div className={"d-flex flex-column py-3"}>
            <Header noBorder>
              <Header.Top>
                <div className={"px-2 d-flex align-items-center justify-content-between w-100"}>
                  <span className="navbar-brand fw-bold fs-4">Message</span>
                  <div className="d-flex">
                    <Link className="nav-link  me-2 p-2" to="#" title="Settings"><i
                      className="bi bi-gear"></i></Link>
                    <Link className="nav-link p-2" to="#" title="New Message"><i
                      className="bi bi-envelope-plus"></i></Link>
                  </div>
                </div>
              </Header.Top>
              <Header.Down>
                <div className="position-relative mt-3 px-2 w-100">
                  {showPlaceholder && (
                    <div
                      className={"position-absolute z-n1 w-100"}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)"
                      }}
                    >
                      <div className={"d-flex align-items-center w-75 mx-auto"}>
                        <i className={"bi bi-search fs-6 text-muted me-2"}></i>
                        <span
                          className={"p-0 m-0 text-muted d-inline-block text-truncate"}
                          style={{maxWidth: "100%"}}
                        >
                      Search Direct Messages
                    </span>
                      </div>
                    </div>
                  )}

                  <input
                    onFocus={handleShowPlaceholder}
                    onBlur={handleShowPlaceholder}
                    ref={searchInput}
                    type="search"
                    id="form1"
                    className="form-control rounded-pill px-3"
                  />
                </div>
              </Header.Down>
            </Header>
          </div>
          <div className="overflow-y-auto" style={{maxHeight: "80vh"}}>
            <ChatList/>
          </div>
        </div>
        <div className={"col-xl-6 border p-0 m-0 z-1 d-none d-lg-block"}>
          <div className={""}>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}

export default authGuard(Message);
