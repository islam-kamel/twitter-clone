import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
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


const initialValue = {
    home: false,
    explore: false,
    notifications: false,
    profile: false,
    message: false,
    bookmarks: false,
    search: false,
}

function useActiveLink() {
    const [isActive, setIsActive] = useState(initialValue)
    const location = useLocation();

    useEffect(() => {
        const name = location.pathname.split("/")[1];
        if (!name?.length) {
            handelClick("home")
        } else {
            handelClick(name.toLowerCase())
        }
    }, [location])

    const handelClick = (name: string) => {
        const value = structuredClone(initialValue)
        value[name] = true
        setIsActive({...initialValue, ...value})
    }

    return {isActive, handelClick}
}

export function BuildIcon(props: { icon: HTMLElement }) {
    return (
        <i className="d-flex tw-navbar-icon">{props?.icon}</i>
    );
}

export function SmNavbar() {
    const {isActive, handelClick} = useActiveLink();

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
                                to={"/"} className="tw-navbar-link d-flex align-items-center text-dark"
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
                                to={"/Message"} className="tw-navbar-link d-flex align-items-center text-dark"
                            >
                                {isActive?.message ? <BuildIcon icon={messages_fill}/> :
                                    <BuildIcon icon={messages}/>}
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function MainSidebar() {
    const {isActive, handelClick} = useActiveLink();

    return (
        <div className={"container"}>
            <div className="" style={{width: 0}}>
                <aside
                    className="position-relative  d-flex flex-column align-items-center justify-content-between"
                >
                    <div
                        className={"top-0 overflow-y-auto position-fixed d-flex mt-0 h-100 flex-column align-items-start mx-auto justify-content-start"}
                    >
                        <div className={"d-flex  h-100  justify-content-between flex-column"}>
                            <div className="tw-navbar">
                                <div className="tw-navbar-brand">
                                    <Link to="#" className="tw-navbar-link text-primary">
                                        <i className="bi bi-twitter"></i>
                                    </Link>
                                </div>
                                <div className="tw-navbar-item">
                                    <Link
                                        onClick={() => handelClick("home")}
                                        to={"/"} className="tw-navbar-link d-flex align-items-center text-dark"
                                    >
                                        {isActive?.home ? <BuildIcon icon={home_fill}/> : <BuildIcon icon={home}/>}
                                        <span className="tw-navbar-text">Home</span>
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
                                        <span className="tw-navbar-text">Explore</span>
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
                                        <span className="tw-navbar-text">Notifications</span>
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
                                        <span className="tw-navbar-text">Messages</span>
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
                                        <span className="tw-navbar-text">Bookmarks</span>
                                    </Link>
                                </div>
                                <div className="tw-navbar-item">
                                    <Link
                                        onClick={() => handelClick("profile")}
                                        to={"profile/islam.admin"}
                                        className="tw-navbar-link d-flex align-items-center text-dark"
                                    >
                                        {isActive?.profile ? <BuildIcon icon={profile_fill}/> :
                                            <BuildIcon icon={profile}/>}
                                        <span className="tw-navbar-text">Profile</span>
                                    </Link>
                                </div>
                                <div className="tw-navbar-item">
                                    <Link to="#" className="tw-navbar-link d-flex align-items-center text-dark">
                                        <BuildIcon icon={more}/>
                                        <span className="tw-navbar-text">More</span>
                                    </Link>
                                </div>
                                <TwButton
                                    btnStyle={"primary"}
                                    classes={"rounded-pill py-2 w-100 d-none d-xl-block"}
                                >
                                    Tweet
                                </TwButton>

                                <TwButton
                                    btnStyle={"primary"}
                                    classes={"rounded-circle w-100 tw-new-tweet-btn d-xl-none"}
                                >
                                    <span className={"text-light "}><BuildIcon icon={newTweet}/></span>
                                </TwButton>
                            </div>

                            <div className={"d-flex align-self-center align-items-center"}>
                                <UserSignButton/>
                            </div>
                        </div>

                    </div>
                </aside>
            </div>
        </div>

    );
}
