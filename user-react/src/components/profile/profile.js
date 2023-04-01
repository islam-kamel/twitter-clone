import React, {useEffect} from "react";
import "./profile.scss";
import {useParams} from "react-router-dom";


export default function Profile() {
    const params = useParams();

    useEffect(() => {

    }, [])
    return (
        <>
            <section>
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-1 py-1 w-25">
                        <div className="mx-2"><i className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"></i>
                        </div>
                        <div className="mx-2">
                            <h6 className="fs-5 fw-2">mostafa</h6>
                            <p className="text-secondary">2 tweets</p>
                        </div>
                    </div>
                    <div className="card mt-3 border-0">
                        <img src="https://th.bing.com/th/id/OIP.nPKODoaHaadqnZgghUxH4wHaEK?pid=ImgDet&rs=1"
                             className="card-img-top profile-photo" alt="..."/>
                        <div className="card-body d-flex justify-content-between  ">
                            <div><img src="https://th.bing.com/th/id/OIF.mAtJExIDFFm2zNDsIaVirA?pid=ImgDet&rs=1"
                                      className=" person-image" alt="..."/></div>
                            <button type="button"
                                    className="btn btn-white border rounded-pill fs-6 fw-bold px-4 me-3 edit-button">
                                Edit profile
                            </button>
                        </div>
                    </div>

                    <div className="px-3 mx-2 ">
                        <h4 className="card-title">mostafa</h4>
                        <p className="card-text"><small className="text-body-secondary">@moustaf37510</small></p>
                        <i className="bi bi-github fs-4 bi-link-hover"></i>
                        <div>
                            <small>Joined February 2022</small>
                        </div>
                        <div className="">
                            <small className="following-N">
                                <span className=" mx-1">59</span><span
                                className="me-1 text-body-secondary">Following</span>
                            </small>
                            <small className="following-N">
                                <span className=" mx-1">99</span><span
                                className="ms-12 text-body-secondary">Followers</span>
                            </small>
                        </div>

                        <hr/>
                    </div>

                    <div>
                        <div
                            className="btn-group trend-bar mt-1 justify-content-around align-items-center d-flex w-100 fs-6 fw-5 text-center "
                            id="explore-group" role="group">
                            <ul className="nav nav-pills  mt-2 col-10 w-100 fs-6 fw-5  d-flex justify-content-around align-items-center"
                                id="pills-tab explore-group" role="tablist">
                                <li className="nav-item" role="presentation">


                                    <button
                                        className="nav-link  nav-links trend-bar nav-tabs border-color  active focus"
                                        id="pills-Tweets-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Tweets" type="button" role="tab"
                                        aria-controls="pills-Tweets"
                                        aria-selected="false">

                                        Tweets
                                    </button>


                                </li>

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link  nav-links trend-bar nav-tabs border-color"
                                            id="pills-Replies-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-Replies" type="button" role="tab"
                                            aria-controls="pills-Replies"
                                            aria-selected="false">
                                        Replies
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button className="nav-link  nav-links trend-bar nav-tabs border-color"
                                            id="pills-Media-tab" data-bs-toggle="pill" data-bs-target="#pills-Media"
                                            type="button" role="tab" aria-controls="pills-Media"
                                            aria-selected="false">Media
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button className="nav-link  nav-links trend-bar  nav-tabs-border-color"
                                            data-bs-toggle="pill"
                                            id="pills-Likes-tab" data-bs-target="#pills-Likes" type="button" role="tab"
                                            aria-controls="pills-Likes"
                                            aria-selected="false">Likes
                                    </button>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="tab-content show" id="pills-tabContent">
                        {/* <!--------------------- Tweets ---------> */}

                        <div className="tab-pane fade   pt-2 show active" id="pills-Tweets" role="tabpanel"
                             aria-labelledby="pills-Tweets-tab" tabIndex="0">

                            <div className="row">
                                <div className="col-12 border-bottom py-2">
                                    <h3 className=" ms-4">How To Follow</h3>
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">
                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>
                                            <div className="followers ms-3 mt-4">
                                                <h5>Eslam Kamel</h5>
                                                <h6 className="text-secondary">@Eslam</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 border-bottom py-2">
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">

                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>


                                            <div className="followers ms-3 mt-4">
                                                <h5>Ahmed Khaled</h5>
                                                <h6 className="text-secondary">@Ahmed</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 border-bottom py-2">
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">
                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>
                                            <div className="followers ms-3 mt-4">
                                                <h5>Eslam Kamel</h5>
                                                <h6 className="text-secondary">@Eslam</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!--------------------- Replies ---------> */}

                        <div className="tab-pane fade" id="pills-Replies" role="tabpanel"
                             aria-labelledby="pills-Replies-tab" tabIndex="0">

                            <div className="row">
                                <div className="col-12 border-bottom py-2">
                                    <h3 className=" ms-4">How To Follow</h3>
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">
                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>
                                            <div className="followers ms-3 mt-4">
                                                <h5>Eslam Kamel</h5>
                                                <h6 className="text-secondary">@Eslam</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 border-bottom py-2">
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">

                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>


                                            <div className="followers ms-3 mt-4">
                                                <h5>Ahmed Khaled</h5>
                                                <h6 className="text-secondary">@Ahmed</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 border-bottom py-2">
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">
                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>
                                            <div className="followers ms-3 mt-4">
                                                <h5>Eslam Kamel</h5>
                                                <h6 className="text-secondary">@Eslam</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* <!---------------------  Media  --------------> */}

                        <div className="tab-pane fade" id="pills-Media" role="tabpanel"
                             aria-labelledby="pills-Media-tab"
                             tabIndex="0">

                            <div className="row">
                                <div className="col-12 border-bottom py-3">

                                    <div
                                        className="trend-card mt-1 d-flex flex-column justify-content-center align-items-center">
                                        <div>
                                            <img src={'...'} style={{width: "60%", height: "60%"}}
                                                 className="rounded-circle " alt="..."/>
                                        </div>
                                        <div className="followers ms-3 ">
                                            <h4>
                                                Lights, camera … attachments!
                                            </h4>

                                        </div>

                                    </div>


                                </div>


                            </div>
                        </div>

                        {/* <!---------------------  Likes  --------------> */}

                        <div className="tab-pane fade" id="pills-Likes" role="tabpanel"
                             aria-labelledby="pills-Likes-tab"
                             tabIndex="0">

                            <div className="row">
                                <div className="col-12 border-bottom py-2">
                                    <h3 className=" ms-4">How To Follow</h3>
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">
                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>
                                            <div className="followers ms-3 mt-4">
                                                <h5>Eslam Kamel</h5>
                                                <h6 className="text-secondary">@Eslam</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 border-bottom py-2">
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">

                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>


                                            <div className="followers ms-3 mt-4">
                                                <h5>Ahmed Khaled</h5>
                                                <h6 className="text-secondary">@Ahmed</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 border-bottom py-2">
                                    <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                                        <div className="followers ms-3 d-flex align-items-center ">
                                            <img src={'...'} width="50" height="50"
                                                 className="rounded-circle float-start" alt="..."/>
                                            <div className="followers ms-3 mt-4">
                                                <h5>Eslam Kamel</h5>
                                                <h6 className="text-secondary">@Eslam</h6>
                                                <h6 className="mt-1">Web Develober-Frontend</h6>
                                            </div>

                                        </div>
                                        <button type="button"
                                                className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>


        </>);
}
