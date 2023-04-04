import "./twitter.main.css"
import {Link} from "react-router-dom";
import UserSignButton from "../usersignButton/userSignButton";
import TwButton from "../tw-button/tw-button";
import {home} from "../../constants/icons";


export default function MainSidebar() {
    return (
        <div className={"container"}>
            <div className="" style={{width: 0}}>
                <aside
                    className="position-relative  d-flex flex-column align-items-center justify-content-between"
                >
                    <div
                        className={"top-0 position-fixed d-flex mt-0 h-100 flex-column align-items-start mx-auto justify-content-start"}
                    >
                        <div className="tw-navbar">
                            <div className="tw-navbar-brand">
                                <Link to="#" className="tw-navbar-link text-primary">
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to={"/"} className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-flex tw-navbar-icon">
                                        {home}
                                    </i>
                                    <span className="tw-navbar-text">Home</span>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to={"/explore"} className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-inherit">
                                        <svg className={"d-block"} fill={"currentColor"} viewBox="0 0 24 24"
                                             aria-hidden="true" width="26" height="26">
                                            <g>
                                                <path
                                                    d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <span className="tw-navbar-text">Explore</span>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to={"/notifications"}
                                      className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-inherit">
                                        <svg className={"d-block"} fill={"currentColor"} viewBox="0 0 24 24"
                                             aria-hidden="true" width="26" height="26">
                                            <g>
                                                <path
                                                    d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <span className="tw-navbar-text">Notifications</span>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to="/Message" className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-inherit">
                                        <svg className={"d-block"} fill={"currentColor"} viewBox="0 0 24 24"
                                             aria-hidden="true" width="26" height="26">
                                            <g>
                                                <path
                                                    d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <span className="tw-navbar-text">Messages</span>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to="#" className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-inherit">
                                        <svg className={"d-block"} fill={"currentColor"} viewBox="0 0 24 24"
                                             aria-hidden="true" width="26" height="26">
                                            <g>
                                                <path
                                                    d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <span className="tw-navbar-text">Bookmarks</span>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to={"profile/islam.admin"}
                                      className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-inherit">
                                        <svg className={"d-block"} fill={"currentColor"} viewBox="0 0 24 24"
                                             aria-hidden="true" width="26" height="26">
                                            <g>
                                                <path
                                                    d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <span className="tw-navbar-text">Profile</span>
                                </Link>
                            </div>
                            <div className="tw-navbar-item">
                                <Link to="#" className="tw-navbar-link d-flex align-items-center text-dark">
                                    <i className="d-inherit">
                                        <svg className={"d-block"} fill={"currentColor"} viewBox="0 0 24 24"
                                             aria-hidden="true" width="26" height="26">
                                            <g>
                                                <path
                                                    d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <span className="tw-navbar-text">More</span>
                                </Link>
                            </div>
                            <TwButton btnStyle={"primary"}
                                      classes={"rounded-pill d-xl-block d-none w-100"}>Tweet</TwButton>
                        </div>

                        <div className={"mt-5 pt-5"}></div>

                        <div className={"d-flex align-self-center align-items-center"}>
                            <UserSignButton/>
                        </div>

                    </div>

                </aside>
            </div>
        </div>

    );
}
