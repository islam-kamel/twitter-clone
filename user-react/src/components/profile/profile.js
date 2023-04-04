import React, {useEffect, useState} from "react";
import "./profile.scss";
import {useParams} from "react-router-dom";
import ProfileModal from "./profileModal";
import axios from "../../apiProvider/axios";
import Card from "../card/card";
import TwButton from "../tw-button/tw-button";

const mediaImage = require("../../Image/media.png")
const profileImage = require("../../assets/profile.image.jpg");


function SuggestionFollow(props: { username: string, fullname: string, profileImage: string }) {

    return (
        <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
            <div className="followers ms-3 d-flex align-items-center ">
                <img src={props?.profileImage} width="50" height="50"
                     className="rounded-circle float-start" alt="..."/>
                <div className="followers ms-3 mt-4">
                    <h5>{props?.fullname}</h5>
                    <span className="text-muted">@{props?.fullname}</span>
                </div>
            </div>
            <TwButton
                btnStyle={"dark"}
                classes={"rounded-pill"}
            >
                Follow
            </TwButton>
        </div>
    );
}


export default function Profile() {
    const params = useParams();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get(`api/user_info/${params?.username}`)
            .then(res => res.data)
            .then(data => setUserInfo({...data}))
    }, [params]);

    return (
        <section className={"border h-100"}>
            <div>
                <div className="row row-cols-auto align-items-center gx-2 mt-3">
                    <div className="mx-2"><i className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"></i>
                    </div>
                    <div className="mx-2">
                        <h6 className="fs-5 fw-2">{userInfo?.fullname}</h6>
                        <p className="text-secondary">2 tweets</p>
                    </div>
                </div>
                <div className="card mt-3 border-0">
                    <img src={`${process.env.REACT_APP_BASE_URL}/api${userInfo?.profile?.cover_image}`}
                         className="card-img-top profile-photo" alt="..."/>
                    <div className="card-body d-flex justify-content-between  ">
                        <div>
                            <img
                                src={`${process.env.REACT_APP_BASE_URL}/api${userInfo?.profile?.image}`}
                                className=" person-image" alt="..."
                            />
                        </div>

                        {/* <!-- Modal --> */}
                        <ProfileModal userInfo={userInfo}/>

                    </div>
                </div>

                <div className="px-3 mx-2 ">
                    <h4 className="card-title">{userInfo?.fullname}</h4>
                    <p className="card-text"><small className="text-body-secondary">@{userInfo?.username}</small>
                    </p>
                    <div>
                        <p>{userInfo?.profile?.bio}</p>
                    </div>
                    <div className={"row row-cols-auto gx-2"}>
                        <div className={"text-muted"}>
                            <i className={"bi bi-geo-alt me-1"}></i>
                            <span>{userInfo?.profile?.location}</span>
                        </div>

                        <div className={"text-muted"}>
                            <i className={"bi bi-balloon me-1"}></i>
                            <span>Born {new Date(userInfo?.birthdate).toLocaleString(true, {dateStyle: "medium"})}</span>
                        </div>

                        <div className={"text-muted"}>
                            <i className={"bi bi-calendar3 me-1"}></i>
                            <span>Joined {new Date(userInfo?.create_at).toLocaleString(true, {dateStyle: "medium"})}</span>
                        </div>
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
                </div>


                {/*<div*/}
                {/*    className="btn-group trend-bar mt-1 justify-content-around align-items-center d-flex w-100 fs-6 fw-5 text-center "*/}
                {/*    id="explore-group"*/}
                {/*    role="group"*/}
                {/*>*/}
                {/*    <ul className="nav nav-pills  mt-2 col-10 w-100 fs-6 fw-5  d-flex justify-content-around align-items-center"*/}
                {/*        id="pills-tab explore-group" role="tablist">*/}
                {/*        <li className="nav-item" role="presentation">*/}

                {/*            <button*/}
                {/*                className="nav-link  nav-links trend-bar nav-tabs border-color  active focus"*/}
                {/*                id="pills-foryou-tab" data-bs-toggle="pill"*/}
                {/*                data-bs-target="#pills-Tweets" type="button" role="tab"*/}
                {/*                aria-controls="pills-Tweets"*/}
                {/*                aria-selected="true"*/}
                {/*            >*/}
                {/*                Tweet*/}
                {/*            </button>*/}
                {/*        </li>*/}

                {/*        <li className="nav-item" role="presentation">*/}
                {/*            <button*/}
                {/*                className="nav-link  nav-links trend-bar nav-tabs border-color"*/}
                {/*                id="pills-Trending-tab"*/}
                {/*                data-bs-toggle="pill"*/}
                {/*                data-bs-target="#pills-Replies"*/}
                {/*                type="button"*/}
                {/*                role="tab"*/}
                {/*                aria-controls="pills-Replies"*/}
                {/*                aria-selected="false"*/}
                {/*            >*/}
                {/*                Replies*/}
                {/*            </button>*/}
                {/*        </li>*/}

                {/*        <li className="nav-item" role="presentation">*/}
                {/*            <button*/}
                {/*                className="nav-link nav-links trend-bar nav-tabs border-color"*/}
                {/*                id="pills-News-tab"*/}
                {/*                data-bs-toggle="pill"*/}
                {/*                data-bs-target="#pills-Media"*/}
                {/*                type="button"*/}
                {/*                role="tab" aria-controls="pills-Media"*/}
                {/*                aria-selected="false"*/}
                {/*            >*/}
                {/*                Media*/}
                {/*            </button>*/}
                {/*        </li>*/}

                {/*        <li className="nav-item" role="presentation">*/}
                {/*            <button*/}
                {/*                className="nav-link  nav-links trend-bar  nav-tabs-border-color"*/}
                {/*                data-bs-toggle="pill"*/}
                {/*                id="pills-Sports-tab"*/}
                {/*                data-bs-target="#pills-Likes"*/}
                {/*                type="button"*/}
                {/*                role="tab"*/}
                {/*                aria-controls="pills-Likes"*/}
                {/*                aria-selected="false"*/}
                {/*            >*/}
                {/*                Likes*/}
                {/*            </button>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}


                {/*<div className="tab-content show" id="pills-tabContent">*/}
                {/*    /!* <!--------------------- Tweets ---------> *!/*/}

                {/*    <div*/}
                {/*        className="tab-pane nav-tabs fade pt-2 show active"*/}
                {/*        id="pills-Tweets"*/}
                {/*        role="tabpanel"*/}
                {/*        aria-labelledby="pills-Tweets-tab"*/}
                {/*        tabIndex="0"*/}
                {/*    >*/}
                {/*        <div className={"d-flex flex-column"}>*/}
                {/*            <Card*/}
                {/*                name=" Engy Mo"*/}
                {/*                text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."*/}
                {/*                username="@engy5821 .2h" img={profileImage}*/}
                {/*            />*/}
                {/*            <Card*/}
                {/*                name=" Engy Mo"*/}
                {/*                text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."*/}
                {/*                username="@engy5821 .2h" img={profileImage}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/* <!--------------------- Replies ---------> */}

                {/*<div*/}
                {/*    className="tab-pane fade"*/}
                {/*    id="pills-Replies"*/}
                {/*    role="tabpanel"*/}
                {/*    aria-labelledby="pills-Replies-tab"*/}
                {/*    tabIndex="0"*/}
                {/*>*/}
                {/*    <div className={"d-flex flex-column"}>*/}
                {/*        <Card*/}
                {/*            name=" Engy Mo"*/}
                {/*            text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."*/}
                {/*            username="@engy5821 .2h" img={profileImage}*/}
                {/*        />*/}
                {/*        <Card*/}
                {/*            name=" Engy Mo"*/}
                {/*            text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."*/}
                {/*            username="@engy5821 .2h" img={profileImage}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*/!*    /!* <!---------------------  Media  --------------> *!/*!/*/}

                {/*<div*/}
                {/*    className="tab-pane fade"*/}
                {/*    id="pills-Media"*/}
                {/*    role="tabpanel"*/}
                {/*    aria-labelledby="pills-Media-tab"*/}
                {/*    tabIndex="0"*/}
                {/*>*/}
                {/*    <div className={'d-flex flex-column'}>*/}

                {/*        <img src={mediaImage} style={{width: "60%", height: "60%"}}*/}
                {/*             className="rounded-circle " alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*    /!* <!---------------------  Likes  --------------> *!/*/}

                {/*<div*/}
                {/*    className="tab-pane fade"*/}
                {/*    id="pills-Likes"*/}
                {/*    role="tabpanel"*/}
                {/*    aria-labelledby="pills-Likes-tab"*/}
                {/*    tabIndex="0"*/}
                {/*>*/}
                    {/*<div className="row">*/}
                    {/*    <h3 className=" fw-bold w-50 ms-4">*/}
                    {/*        You don’t have any likes yet*/}
                    {/*    </h3>*/}
                    {/*    <Card*/}
                    {/*        name=" Engy Mo"*/}
                    {/*        text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."*/}
                    {/*        username="@engy5821 .2h" img={profileImage}*/}
                    {/*    />*/}

                    {/*    <div className="col-12 border-bottom py-2">*/}
                    {/*        <h3 className=" ms-4">How To Follow</h3>*/}
                    {/*        <div className="trend-card mt-1 d-flex justify-content-between align-items-center">*/}
                    {/*            <div className="followers ms-3 d-flex align-items-center ">*/}
                    {/*                <img src={"..."} width="50" height="50"*/}
                    {/*                     className="rounded-circle float-start" alt="..."/>*/}
                    {/*                <div className="followers ms-3 mt-4">*/}
                    {/*                    <h5>Eslam Kamel</h5>*/}
                    {/*                    <h6 className="text-secondary">@Eslam</h6>*/}
                    {/*                    <h6 className="mt-1">Web Develober-Frontend</h6>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*            <button type="button"*/}
                    {/*                    className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-12 border-bottom py-2">*/}
                    {/*        <div className="trend-card mt-1 d-flex justify-content-between align-items-center">*/}
                    {/*            <div className="followers ms-3 d-flex align-items-center ">*/}

                    {/*                <img src={"..."} width="50" height="50"*/}
                    {/*                     className="rounded-circle float-start" alt="..."/>*/}


                    {/*                <div className="followers ms-3 mt-4">*/}
                    {/*                    <h5>Ahmed Khaled</h5>*/}
                    {/*                    <h6 className="text-secondary">@Ahmed</h6>*/}
                    {/*                    <h6 className="mt-1">Web Develober-Frontend</h6>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*            <button type="button"*/}
                    {/*                    className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-12 border-bottom py-2">*/}
                    {/*        <div className="trend-card mt-1 d-flex justify-content-between align-items-center">*/}
                    {/*            <div className="followers ms-3 d-flex align-items-center ">*/}
                    {/*                <img src={"..."} width="50" height="50"*/}
                    {/*                     className="rounded-circle float-start" alt="..."/>*/}
                    {/*                <div className="followers ms-3 mt-4">*/}
                    {/*                    <h5>Eslam Kamel</h5>*/}
                    {/*                    <h6 className="text-secondary">@Eslam</h6>*/}
                    {/*                    <h6 className="mt-1">Web Develober-Frontend</h6>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*            <button type="button"*/}
                    {/*                    className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">Follow*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
