import React from "react";
import "./explore.scss";
import Trends from "../Trends/trends";
import {useTranslation} from 'react-i18next';

export default function Explore() {

        const [t, translate] = useTranslation();

  const handleSearcher = () => {

    document.getElementById("input-bar").addEventListener("blur", () => {
      var serchIcon = document.getElementById("search-icon");
      serchIcon.style.cssText = " background-color:#dad9d9c4; border: 0;color:#797979;"
      document.getElementById("input-bar").style.backgroundColor = "#dad9d9c4";
    })

    document.getElementById("input-bar").addEventListener("focus", () => {
      var serchIcon = document.getElementById("search-icon");
      serchIcon.style.cssText = " background-color:#eff3f4; border: 1px solid #1c88d2;color:#1c88d2;"
      document.getElementById("input-bar").style.backgroundColor = "#eff3f4 !important";
    })
  }

  return <>
    <section className="container-fluid">
      <div className="row">

        <div id="explore" className=" col-12  border-end p-3">
        <div className="d-flex justify-content-between mb-3 mt-2">
                        <h4>{t('explore.explore')}</h4>
                    </div>
          {/* <!--  --------------------------------search-Bar-------------- --> */}
          <div id="searchBar" className="t-center col-10">
            <div className=" mb-1  justify-content-between align-items-center d-flex " id="search-group">
              <div
                className="sserch input-group  d-flex justify-content-start  align-items-center  col-6 rounded-pill ms-3"
                id="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                     className="bi bi-search col-2" viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <input type="text" className=" bg-transparent   border border-0 fs-6 " id="input-bar"
                       placeholder={t('explore.search_twitter')}
                       aria-label="search" aria-describedby="basic-addon1"
                       onClick={() => handleSearcher()}/>
              </div>
              <div className="ms-3 d-flex align-items-center justify-content-center" id="setting">
                <div className="input-group-text text-dark d-flex bg-transparent border-0">
                  {/* <!-- Button trigger modal --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                       className="bi bi-gear"
                       viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <path
                      d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path
                      d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                  </svg>
                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="exampleModal" tabIndex="-1"
                       aria-labelledby="exampleModalLabel"
                       aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <div className="d-flex justify-content-center align-items-center ">
                            <button type="button" width="50" className="btn-close fw-4 "
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            <h5 className="modal-title fs-5 fw-4 ms-3"
                                id="staticBackdropLabel">
                               {t('explore.modal_trends_title')}</h5>
                          </div>
                        </div>
                        <div className="modal-body py-3 d-flex justify-content-between "
                             style={{height: "500px"}}>
                          <div>
                            <h6 className="d-flex justify-content-start">{t('explore.modal_trends_head')}</h6>
                            <p className="" style={{fontSize: 13}}>{t('explore.modal_trends_body')}</p>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input px-2" type="checkbox"
                                   value=""
                                   id="flexCheckChecked" defaultChecked/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!----------------  Trending Bar  ---------------------> */}
          <div
            className="btn-group trend-bar mt-1 justify-content-around align-items-center d-flex w-100 fs-6 fw-5 text-center "
            id="explore-group" role="group">
            <ul className="nav nav-pills  mt-2 col-10 w-100 fs-6 fw-5  d-flex justify-content-around align-items-center"
                id="pills-tab explore-group" role="tablist">
              <li className="nav-item" role="presentation">


                <button className="nav-link  nav-links trend-bar nav-tabs border-color  active focus"
                        id="pills-foryou-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-foryou" type="button" role="tab"
                        aria-controls="pills-foryou"
                        aria-selected="false">

                        {t('explore.title_foru')}
                </button>


              </li>

              <li className="nav-item" role="presentation">

                <button className="nav-link  nav-links trend-bar nav-tabs border-color"
                        id="pills-Trending-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Trending" type="button" role="tab"
                        aria-controls="pills-Trending"
                        aria-selected="false">
                 {t('explore.title_trending')}

                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link  nav-links trend-bar nav-tabs border-color"
                        id="pills-News-tab" data-bs-toggle="pill" data-bs-target="#pills-News"
                        type="button" role="tab" aria-controls="pills-News" aria-selected="false">
                                 {t('explore.title_news')}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link  nav-links trend-bar  nav-tabs-border-color"
                        data-bs-toggle="pill"
                        id="pills-Sports-tab" data-bs-target="#pills-Sports" type="button" role="tab"
                        aria-controls="pills-Sports"
                        aria-selected="false">
                                 {t('explore.title_sports')}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link nav-links trend-bar nav-tabs-border-color"
                        data-bs-toggle="pill"
                        id="pills-Entertainment-tab" data-bs-target="#pills-Entertainment" type="button"
                        role="tab"
                        aria-controls="pills-Entertainment-tab" aria-selected="false">
                                {t('explore.title_entertainment')}
                </button>
              </li>

            </ul>

          </div>
          <div className="tab-content show" id="pills-tabContent" dir={t('dir')}>
            {/* <!----------------- ForYou-Trends-------------> */}
            <div className="tab-pane fade   pt-2 show active" id="pills-foryou" role="tabpanel"
                 aria-labelledby="pills-foryou-tab" tabIndex="0">


              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="أفريقيا يا زمالك"
                      trendTweets="24,2K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="عارف كام"
                      trendTweets="24,2K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="شيكابالا"
                      trendTweets="1,996K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="الاهلي#"
                      trendTweets="21,5K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="الزمالك#"
                      trendTweets="54,8K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="كاس العالم للأندية#"
                      trendTweets="Trending With كاس العالم "></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="تضامن مصر"
                      trendTweets="25,1K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="الهداف التاريخي"
                      trendTweets="26.0K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="يحدث الان #"
                      trendTweets="55.3K Tweets"></Trends>

              <hr/>
              <div className="row">
                <div className="col-12 border-bottom py-2">
                  <h3 className=" ms-4">{t('explore.how_follow')}</h3>
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img src="../assets/images/moon3.jpg" width="50" height="50"
                           className="rounded-circle float-start" alt="..."/>
                      <div className="followers ms-3 mt-4">
                        <h5>Eslam Kamel</h5>
                        <h6 className="text-secondary">@Eslam</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>

                    </div>
                    <button type="button"
                            className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">{t('explore.how_follow_f')}
                    </button>
                  </div>
                </div>
                <div className="col-12 border-bottom py-2">
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">

                      <img src="../../assets/images/OIP.jpeg" width="50" height="50"
                           className="rounded-circle float-start" alt="..."/>


                      <div className="followers ms-3 mt-4">
                        <h5>Ahmed Khaled</h5>
                        <h6 className="text-secondary">@Ahmed</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>

                    </div>
                    <button type="button"
                            className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">{t('explore.how_follow_f')}
                    </button>
                  </div>
                </div>
                <div className="col-12 border-bottom py-2">
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img src="../assets/OIP.jpeg" width="50" height="50"
                           className="rounded-circle float-start" alt="..."/>
                      <div className="followers ms-3 mt-4">
                        <h5>Eslam Kamel</h5>
                        <h6 className="text-secondary">@Eslam</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>

                    </div>
                    <button type="button"
                            className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3">{t('explore.how_follow_f')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--------------------- Trending-Trends--> */}
            <div className="tab-pane fade" id="pills-Trending" role="tabpanel"
                 aria-labelledby="pills-Trending-tab" tabIndex="0">
              <h5 className="mt-3 ms-4">{t('explore.title_trending_txt')}</h5>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.trending_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

            </div>

            {/* <!-- ----------------- News Trends -------------------------> */}
            <div className="tab-pane fade" id="pills-News" role="tabpanel" aria-labelledby="pills-News-tab"
                 tabIndex="0">

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.news_placeName')} trendName="Javascript"
                      trendTweets="55.3K Tweets"></Trends>

            </div>

            {/* <!------------------ Sports Trends -------------------------> */}
            <div className="tab-pane fade" id="pills-Sports" role="tabpanel"
                 aria-labelledby="pills-Sports-tab" tabIndex="0">

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.foru_placeName')} trendName="Baseball"
                      trendTweets="55.3K Tweets"></Trends>

            </div>

            {/* <!------------------ Entertainment Trends -----------------------> */}
            <div className="tab-pane fade" id="pills-Entertainment" role="tabpanel"
                 aria-labelledby="pills-Entertainment-tab" tabIndex="0">

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>

              <Trends className="trendss" trendPlace={t('explore.entertainment_placeName')}
                      trendName="Marvel Studios" trendTweets="55.3K Tweets"></Trends>


            </div>
          </div>
        </div>

      </div>
    </section>


  </>
}
