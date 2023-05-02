import React, { useState } from "react";
import "./Notifications.css"
import Avatare from "../../Image/avatar.png"
import notifications from "../../Image/notifications.jpg"
import authGuard from "../../guards/authGuard";
import { useTranslation } from 'react-i18next';



function Notifications() {

    const [t,setT] = useTranslation();

  return (
    <>
      <section id="Notifications" className="container">
        <div className="content ">
          <div className="item-Notifications container px-3 py-2 ">
            <div className="d-flex justify-content-between mt-2">
              <h4> {t('notification.notifications')} </h4>
              <i className="fa-solid fa-gear"></i>
            </div>
            <nav className="container py-3">
              <div className="nav nav-tabs justify-content-between border-bottom pb-1 " id="nav-tab"
                   role="tab">
                <button className="nav-link border-0 active" id="nav-All-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-All" type="button" role="tab" aria-controls="nav-All"
                        aria-selected="true">{t('notification.all')}
                </button>
                <button className="nav-link border-0" id="nav-Verified-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-Verified" type="button" role="tab"
                        aria-controls="nav-Verified" aria-selected="false">{t('notification.verified')}
                </button>
                <button className="nav-link border-0" id="nav-Mentions-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-Mentions" type="button" role="tab"
                        aria-controls="nav-Mentions" aria-selected="false">{t('notification.mentions')}
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
                      <p className="text-muted">{t('notification.New Tweet Notifications for')} Ahmed | Programing {t('notification.And')}
                        3 {t('notification.Others')}</p>
                    </div>
                  </div>
                  <div className="img-Notifications border-bottom  ">
                    <div className=" d-flex my-4">
                      <i className="fa fa-brands fa-twitter fa-2x me-3 text-primary"></i>
                      <p className="text-muted">{t('notification.New Tweet Notifications for')} Ahmed | Programing {t('notification.And')}
                         3 {t('notification.Others')}</p>
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
                  <h1>{t('notification.mentions_head')}</h1>
                  <p className="text-muted">{t('notification.verified_txt')} <span><a
                      className="text-black"
                      href="https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts">{t('notification.learnMore')}</a></span>
                  </p>
                </div>
              </div>

              {/* <!-- ======================================== mentions =================================================== --> */}

              <div className="tab-pane fade" id="nav-Mentions" role="tabpanel"
                   aria-labelledby="nav-Mentions-tab" tabIndex="0">
                <div className=" mentions mx-5 px-5">
                  <h2 className=" fw-bold mb-3">{t('notification.mentions_head')}</h2>
                  <p className="text-muted"> {t('notification.mentions_txt')} </p>
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
