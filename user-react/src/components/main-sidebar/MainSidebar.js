import {Link, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import UserSignButton from "../usersignButton/userSignButton";
import TwButton from "../tw-button/tw-button";
import "./twitter.main.css"
import {
  bookmarks,
  bookmarks_fill,
  explore,
  explore_fill,
  home,
  home_fill,
  messages,
  messages_fill,
  more,
  newTweet,
  notifications,
  notifications_fill,
  profile,
  profile_fill,
  search_fill
} from "../../constants/icons";
import TwDropdown from "../twDropdown/TwDropdown";
import useLogout from "../../hooks/useLogout";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";


const initialRouteValue = {
  home: false,
  explore: false,
  notifications: false,
  profile: false,
  message: false,
  bookmarks: false,
  search: false,
}

function useActiveLink() {
  const [isActive, setIsActive] = useState(initialRouteValue)
  const location = useLocation();

  useEffect(() => {
    const name = location.pathname.split("/")[1];
    if (!name?.length) {
      handelClick("home")
    } else {
      handelClick(name.toLowerCase())
    }
  }, [location])

  const handelClick = (name) => {
    const value = structuredClone(initialRouteValue)
    value[name] = true
    setIsActive({...initialRouteValue, ...value})
  }

  return {isActive, handelClick}
}

export function BuildIcon(props) {
  const [t] = useTranslation()

  return (
      t('dir') === 'ltr' ? (
        <i className="d-flex tw-navbar-icon">{props?.icon}</i>
      ) : (
        <i className="d-flex tw-navbar-icon" style={{marginLeft: '10px', marginRight: 0}} >{props?.icon}</i>
      )
  );
}

export function SmNavbar() {
  const {isActive, handelClick} = useActiveLink();
  const logout = useLogout();
  const userInfo = useSelector(state => state.currentUser.userProfile)

  return (
    <div className={"position-fixed backdrop-blur border-top start-0 bottom-0 w-100"}>
      <div className={"container"}>
        <div className={"w-100 d-flex justify-content-center my-1"}>
          <div className={"d-flex justify-content-around w-100"}>
            <div className={"tw-navbar-item"}>
              <Link
                onClick={() => handelClick("home")}
                to={"/"} className="tw-navbar-link d-flex align-items-center text-dark"
              >
                {isActive?.home ? <BuildIcon icon={home_fill}/> : <BuildIcon icon={home}/>}
              </Link>
            </div>
            <div className={"tw-navbar-item"}>
              <Link
                onClick={() => handelClick("home")}
                to={"explore"} className="tw-navbar-link d-flex align-items-center text-dark"
              >
                {isActive?.search ? <BuildIcon icon={search_fill}/> :
                  <BuildIcon icon={search_fill}/>}
              </Link>
            </div>
            <div className={"tw-navbar-item"}>
              <Link
                onClick={() => handelClick("home")}
                to={"/notifications"} className="tw-navbar-link d-flex align-items-center text-dark"
              >
                {isActive?.notifications ? <BuildIcon icon={notifications_fill}/> :
                  <BuildIcon icon={notifications}/>}
              </Link>
            </div>
            <div className={"tw-navbar-item"}>
              <Link
                onClick={() => handelClick("home")}
                to={"/Message"} replace={true} className="tw-navbar-link d-flex align-items-center text-dark"
              >
                {isActive?.message ? <BuildIcon icon={messages_fill}/> :
                  <BuildIcon icon={messages}/>}
              </Link>
            </div>
            <div className="tw-navbar-item px-1">

              <TwDropdown
                classes={"tw-dropdown-top-center mb-4"}
                toggle={
                  <TwDropdown.Toggle>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL + "/api" + userInfo?.profile?.image}`}
                      className="rounded-circle  tw-profile-image"
                      alt={userInfo?.fullname}
                    />
                  </TwDropdown.Toggle>
                }
              >
                <Link
                  to={`profile/${userInfo?.username}`}
                  replace={true}
                  preventScrollReset={true}
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

      </div>
    </div>
  );
}

export default function MainSidebar() {
  const {isActive, handelClick} = useActiveLink();
  const userInfo = useSelector(state => state.currentUser.userProfile);
  const [t] = useTranslation();

  const UserAction = () => {

    return (
      <>
        <div className="tw-navbar-item">
          <Link
            onClick={() => handelClick("home")}
            to={"/"} className="tw-navbar-link d-flex align-items-center text-dark"
          >
            {isActive?.home ? <BuildIcon icon={home_fill}/> : <BuildIcon icon={home}/>}
            <span className={`tw-navbar-text ${isActive?.home && 'fw-medium'}`}>{t("mainSideBar.home_S")}</span>
          </Link>
        </div>
        <div className="tw-navbar-item">
          <Link
            onClick={() => handelClick("explore")}
            to={"/explore"}
            className="tw-navbar-link d-flex align-items-center text-dark"
          >
            {isActive?.explore ? <BuildIcon icon={explore_fill}/> :
              <BuildIcon icon={explore}/>}
            <span className={`tw-navbar-text ${isActive?.explore && 'fw-medium'}`}>{t('mainSideBar.explore_S')}</span>
          </Link>
        </div>
        <div className="tw-navbar-item">
          <Link
            onClick={() => handelClick("notifications")}
            to={"/notifications"}
            className={`tw-navbar-link d-flex align-items-center text-dark`}
          >
            {isActive?.notifications ? <BuildIcon icon={notifications_fill}/> :
              <BuildIcon icon={notifications}/>}
            <span className={`tw-navbar-text ${isActive?.notifications && 'fw-medium'}`}>{t('mainSideBar.notifications_S')}</span>
          </Link>
        </div>
        <div className="tw-navbar-item">
          <Link
            onClick={() => handelClick("messages")}
            to="/Message"
            className="tw-navbar-link d-flex align-items-center text-dark"
          >

            {isActive?.message ? <BuildIcon icon={messages_fill}/> :
              <BuildIcon icon={messages}/>}
            <span className={`tw-navbar-text ${isActive?.message && 'fw-medium'}`}>{t('mainSideBar.messages_S')}</span>
          </Link>
        </div>
        <div className="tw-navbar-item">
          <Link
            onClick={() => handelClick("bookmarks")}
            to="bookmarks"
            className="tw-navbar-link d-flex align-items-center text-dark"
          >
            {isActive?.bookmarks ? <BuildIcon icon={bookmarks_fill}/> :
              <BuildIcon icon={bookmarks}/>}
            <span className={`tw-navbar-text ${isActive?.explore && 'fw-medium'}`}>{t('mainSideBar.bookmarks_S')}</span>
          </Link>
        </div>
        <div className="tw-navbar-item">
          <Link
            onClick={() => handelClick("profile")}
            to={`profile/${userInfo?.username}`}
            className="tw-navbar-link d-flex align-items-center text-dark"
          >
            {isActive?.profile ? <BuildIcon icon={profile_fill}/> :
              <BuildIcon icon={profile}/>}
            <span className={`tw-navbar-text ${isActive?.profile && 'fw-medium'}`}>{t('mainSideBar.profile_S')}</span>
          </Link>
        </div>

        <div className="tw-navbar-item">
          <Link
            data-bs-toggle = "modal"
            data-bs-target = "#settingsModal"
            to="#"
            className="tw-navbar-link d-flex align-items-center text-dark"
          >
            <BuildIcon icon={more}/>
            <span className={`tw-navbar-text`}>{t('mainSideBar.more_S')}</span>
          </Link>
        </div>


      

        <TwButton
          btnStyle={"primary"}
          classes={"rounded-pill py-2 w-100 d-none d-xl-block"}
          other={{
            "data-bs-toggle": "modal",
           "data-bs-target" :"#NewTweetModal"
          }}
          
        >

          <span className={`tw-navbar-text`}>{t('mainSideBar.tweet_S')}</span>
        </TwButton>



        <TwButton
          btnStyle={"primary"}
          classes={"rounded-circle tw-new-tweet-btn d-xl-none"}
          other={{
            "data-bs-toggle": "modal",
           "data-bs-target" :"#NewTweetModal"
          }}
        >
          <span className={"text-light "}><BuildIcon icon={newTweet}/></span>
        </TwButton>
      </>
    );
  }


  return (
    <>
      <aside className={'position-sticky top-0'} style={{width: 'fit-content'}}>
        <div className={" overflow-y-auto"} style={{maxHeight: "100vh", maxWidth: '290px'}}>
          <div className={"d-flex align-items-start  h-100  justify-content-between flex-column"}>
            <div className="tw-navbar">
              <div className="tw-navbar-brand">
                <Link to="#" className="tw-navbar-link text-primary">
                  <i className="bi bi-twitter"></i>
                </Link>
              </div>
              {userInfo?.id ? <UserAction/> : (
                <div className="tw-navbar-item">
                  <Link
                    onClick={() => handelClick("explore")}
                    to={"/explore"}
                    className="tw-navbar-link d-flex align-items-center text-dark"
                  >
                    {isActive?.explore ? <BuildIcon icon={explore_fill}/> :
                      <BuildIcon icon={explore}/>}
                    <span className="tw-navbar-text">Explore</span>
                  </Link>
                </div>
              )
              }
            </div>

            {userInfo?.id && (
              <div className={"d-flex align-self-center align-items-center w-100"}>
                <UserSignButton userInfo={userInfo}/>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
