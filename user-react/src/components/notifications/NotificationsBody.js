import React from "react";
import "./Notifications.css"
import Avatare from "../../Image/avatar.png"
import notifications from "../../Image/notifications.jpg"
import "@fortawesome/fontawesome-free/css/all.min.css"
import authGuard from "../../guards/authGuard";


function Notifications() {
    return (
        <>
            <section id="Notifications" className="container">
                <div className="content ">
                    <div className="item-Notifications container px-3 py-2 ">
                        <div className="d-flex justify-content-between mt-2">
                            <h4>Notifications</h4>
                            <i className="fa-solid fa-gear"></i>
                        </div>
                        <nav className="container py-3">
                            <div className="nav nav-tabs justify-content-between border-bottom pb-1 " id="nav-tab"
                                 role="tab">
                                <button className="nav-link border-0 active" id="nav-All-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-All" type="button" role="tab" aria-controls="nav-All"
                                        aria-selected="true">All
                                </button>
                                <button className="nav-link border-0" id="nav-Verified-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-Verified" type="button" role="tab"
                                        aria-controls="nav-Verified" aria-selected="false">Verified
                                </button>
                                <button className="nav-link border-0" id="nav-Mentions-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-Mentions" type="button" role="tab"
                                        aria-controls="nav-Mentions" aria-selected="false">Mentions
                                </button>
                            </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-All" role="tabpanel"
                                 aria-labelledby="nav-All-tab" tabIndex="0">
                                <div className="mx- px-4">
                                    <div className="img-Notifications border-bottom ">
                                        <div className="d-flex">
                                            <i className="fa-solid fa-bell fa-2x me-1"></i>
                                            <img className="" src={Avatare} alt=""/>
                                            <img className="" src={Avatare} alt=""/>
                                            <img className="" src={Avatare} alt=""/>
                                            <img className="" src={Avatare} alt=""/>
                                            <img className="" src={Avatare} alt=""/>
                                        </div>

                                        <div className="mt-3 ms-3">
                                            <p className="text-muted">New Tweet Notifications for Ahmed | Programing And
                                                3 Others</p>
                                        </div>
                                    </div>
                                    <div className="img-Notifications border-bottom  ">
                                        <div className=" d-flex my-4">
                                            <i className="fa fa-brands fa-twitter fa-2x me-3 text-primary"></i>
                                            <p className="text-muted">New Tweet Notifications for Ahmed | Programing And
                                                3 Others</p>
                                        </div>
                                    </div>

                                    <div className="img-Notifications h-100 position-relative border-bottom  ">
                                        <div className=" my-4">
                                            <div
                                                className="d-flex w-25 align-items-center justify-content-start pt-2 mb-3 ms-2">
                                                <i className="fa-solid fa-star fa-1x me-2"></i>
                                                <img className="" src={Avatare} alt=""/>
                                            </div>
                                            <p className="text-muted ms-5  mb-5">Osama Elzero Liked Your reply </p>
                                            <p className="pe-3 position-absolute bottom-0 end-0"><span><i
                                                className="fa-solid fa-heart"></i></span> اخويا متولي ده راجل ملهوش حل
                                            </p>
                                        </div>
                                    </div>
                                    <div className="img-Notifications h-100 position-relative border-bottom  ">
                                        <div className=" my-4">
                                            <div
                                                className="d-flex w-25 align-items-center justify-content-start pt-2 mb-3 ms-2">
                                                <i className="fa-solid fa-heart fa-1x me-2"></i>
                                                <img className="" src={Avatare} alt=""/>
                                            </div>
                                            <p className="text-muted ms-5  mb-5">Osama Elzero Liked Your reply </p>
                                            <p className="pe-lg-3 ps-md-0 position-absolute bottom-0 end-0"><span><i
                                                className="fa-solid fa-heart"></i></span> اخويا صبحي ده راجل ملهوش حل
                                            </p>
                                        </div>
                                    </div>
                                    <div className="img-Notifications h-100 position-relative border-bottom  ">
                                        <div className=" my-4">
                                            <div
                                                className="d-flex w-25 align-items-center justify-content-start pt-2 mb-3 ms-2">
                                                <i className="fa-solid fa-star fa-1x me-2"></i>
                                                <img className="" src={Avatare} alt=""/>
                                            </div>
                                            <p className="text-muted ms-5  mb-5">Osama Elzero Liked Your reply </p>
                                            <p className="pe-3 position-absolute bottom-0 end-0"><span><i
                                                className="fa-solid fa-heart"></i></span> اخويا محمد ده راجل ملهوش حل
                                            </p>
                                        </div>
                                    </div>
                                    <div className="img-Notifications h-100 position-relative border-bottom  ">
                                        <div className=" my-4">
                                            <div
                                                className="d-flex w-25 align-items-center justify-content-start pt-2 mb-3 ms-2">
                                                <i className="fa-solid fa-user fa-1x me-2"></i>
                                                <img className="" src={Avatare} alt=""/>
                                            </div>
                                            <p className="text-muted ms-5  mb-5">Osama Elzero Liked Your reply </p>
                                            <p className="pe-3 pe-sm-0 position-absolute bottom-0 end-0"><span><i
                                                className="fa-solid fa-heart"></i></span> اخويا احمد ده راجل ملهوش حل
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ======================================== verified =================================================== --> */}

                            <div className="tab-pane fade" id="nav-Verified" role="tabpanel"
                                 aria-labelledby="nav-Verified-tab" tabIndex="0">
                                <div className=" verified mx-5 px-4">
                                    <img className=" w-100" src={notifications} alt=""/>
                                    <h1>Nothing to see here — yet</h1>
                                    <p className="text-muted">Likes, mentions, Retweets, and a whole lot more — when it
                                        comes from a verified account, you’ll find it here. <span><a
                                            className="text-black"
                                            href="https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts">Learn more</a></span>
                                    </p>
                                </div>
                            </div>

                            {/* <!-- ======================================== mentions =================================================== --> */}

                            <div className="tab-pane fade" id="nav-Mentions" role="tabpanel"
                                 aria-labelledby="nav-Mentions-tab" tabIndex="0">
                                <div className=" mentions mx-5 px-5">
                                    <h2 className=" fw-bold mb-3">Nothing to see here — yet</h2>
                                    <p className="text-muted">When someone mentions you, you’ll find it here.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default authGuard(Notifications);
