import React, {useCallback, useEffect, useRef, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import authGuard from "../../guards/authGuard";
import Header from "../header/header";
import "./Message.css"
import ChatList from "./chatList";
import ChatRoom from "./ChatRoom";
import { useTranslation } from "react-i18next";

const Message = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [show, setShow] = useState(false);
  const params = useParams();
  const [chatTop, setChatTop] = useState(false);
  const searchInput = useRef(null);
  const location = useLocation();

  const handleShowPlaceholder = () => {
    if (!searchInput.current.value) {
      setShowPlaceholder(!showPlaceholder);
    }
  }

  useEffect(() => {
    if (params?.username) {
      setShow(prev => !prev);
    }
  }, [location.pathname, params?.username])

  useEffect(() => {
    const clientWidth = (event) => {
      if (event.target.innerWidth >= 1280) {
        setChatTop(false)
      } else {
        setChatTop(true)
      }
    }

    window.addEventListener("resize", clientWidth);

    if (window.innerWidth < 1281) {
      setChatTop(true)
    }

    return () => {
      window.removeEventListener("resize", clientWidth)
    }
  }, []);

  const handleBack = useCallback(({mainBack}) => {
    mainBack()
    setShow(prev => !prev);
  }, [])

  const [t,setT] = useTranslation();

  return (
    <div className={"overflow-hidden"} style={{maxHeight: "100vh"}}>
      {show && chatTop && <ChatRoom onBack={handleBack}/>}
      <div className={"row m-0 p-0 overflow-hidden"} style={{height: "100vh", maxHeight: "100vh"}}>
        <div className={"col-12 p-0 border border-end-0 col-xl-6 h-100"}>
          <div className={"d-flex flex-column py-3"}>
            <Header noBorder>
              <Header.Top>
                <div className={"px-2 d-flex align-items-center justify-content-between w-100"}>
                  <span className="navbar-brand fw-bold fs-4">{t('message.messages')}</span>
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
                        <i className={"bi bi-search fs-6 text-muted  mx-2"}></i>
                        <span
                          className={"p-0 m-0 text-muted d-inline-block text-truncate"}
                          style={{maxWidth: "100%"}}
                        >
                      {t('message.Search Direct Messages')}
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
          <div className="col overflow-y-auto " style={{maxHeight: "80vh"}}>
            <ChatList/>
          </div>
        </div>
        <div className={"col-6 border p-0 m-0 d-none d-lg-block"}>
          {show && !chatTop && <ChatRoom onBack={handleBack}/>}
        </div>
      </div>
    </div>
  );
}

export default authGuard(Message);
