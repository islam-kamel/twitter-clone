import React, {useEffect} from "react";
import "./profile.scss";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import ProfileModal from "./profileModal";
import Card from "../card/card";
import authGuard from "../../guards/authGuard";
import {FollowButton, SuggestionFollow} from "../suggestionFollow/SuggestionFollow";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUserTweets} from "../../store/features/user/user";
import {fetchReplies} from "../../store/features/replies/replies";
import Header from "../header/header";
import {verifyBlue} from "../../constants/icons";
import { useTranslation } from "react-i18next";
import {fetchProfileInfo, fetchTweetsForUser} from "../../store/features/profile/profile";
import {collection, limit, orderBy, query, where} from "firebase/firestore";
import {firebaseDb} from "../../store/API/firebase";

const mediaImage = require("../../Image/media.png")

function Profile(props) {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const back = location.state?.from?.pathname || "/";
  const[t] = useTranslation();

  let {tweets: userTweets, replies, profile: userInfo} = useSelector(state => {
    return {...state.profile, ...state.replies}
  })
  const currentUser = useSelector(state => state.currentUser.userProfile)

  const dispatch = useDispatch()

  const handleMessage = () => {
    collection(firebaseDb, 'chat').add({
      users: [params.username, currentUser.username]
    })
  }

  useEffect(() => {
    async function getAll() {
      await dispatch(fetchProfileInfo({username: params.username})).unwrap()
      await dispatch(fetchTweetsForUser({username: params.username})).unwrap()
      await dispatch(fetchCurrentUserTweets({username: params.username})).unwrap()
      await dispatch(fetchReplies({username: params.username})).unwrap()
    }
    try {
      getAll()
    } catch (e) {
      console.log("error")
    }

  }, [dispatch, location.pathname, params.username])

  const ProfileSection = () => {
    return (
      <div>
        <Header>
          <Header.Top>
            <div className="d-flex align-items-center mt-2">
              <div className={"mx-3"}>
                <i
                  onClick={() => {
                    navigate(back, {state: {from: location.pathname}})
                  }}
                  role={"button"}
                  className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"
                ></i>
              </div>
              <div>
                <h6 className="fs-5 fw-2 m-0">{userInfo?.fullname}</h6>
                <p className="text-secondary m-0">{userTweets?.length} {t('profile.tweets')}</p>
              </div>
            </div>
          </Header.Top>
        </Header>
        <div className="card border-0">
          <img src={`${process.env.REACT_APP_BASE_URL}/api${userInfo?.profile?.cover_image}`}
               className=" profile-photo" alt="..."/>
          <div className="card-body d-flex justify-content-between  ">
            <div>
              <img
                src={`${process.env.REACT_APP_BASE_URL}/api${userInfo?.profile?.image}`}
                className=" person-image" alt="..."
                style={{objectFit: "cover"}}
              />
            </div>

            {/* <!-- Modal --> */}
            {userInfo.id === currentUser.id ?  <ProfileModal userInfo={userInfo}/> : (
              <div onClick={handleMessage} className={'d-flex align-items-center'}>
                <div className={'icon-button mx-3'}>
                  <div className={'icon-bg i-bg-primary'}>
                    <span className={'bi bi-envelope-plus fs-5'}></span>
                  </div>
                </div>
                <FollowButton username={userInfo?.username}></FollowButton>
              </div>
            )}
          </div>
        </div>

        <div className="px-3 mx-2 ">
          <h4 className="card-title">
            {userInfo?.fullname}
            {userInfo?.is_verify &&  <span className={"text-primary tw-navbar-icon ms-1"}>{verifyBlue}</span>}
          </h4>
          <p className="card-text"><small className="text-body-secondary">@{userInfo?.username}</small></p>
          {userInfo?.profile?.bio !== "" && (
            <div>
              <p>{userInfo?.profile?.bio}</p>
            </div>
          )}
          <div className={"row row-cols-auto gx-2 gy-1 mb-2 w-100"}>
            {userInfo?.profile?.location !== "" && (
              <div className={"text-muted d-flex align-items-center"}>
                <i className={"bi bi-geo-alt me-1"}></i>
                <span>{userInfo?.profile?.location}</span>
              </div>
            )}
            {userInfo?.profile?.birthdate !== "" && (
              <div className={"text-muted d-flex align-items-center"}>
                <i className={"bi bi-balloon me-1"}></i>
                <span>{t('profile.born')} {new Date(userInfo?.birthdate).toLocaleString(true, {dateStyle: "medium"})}</span>
              </div>
            )}

            {userInfo?.profile?.create_at !== "" && (
              <div className={"text-muted d-flex align-items-center"}>
                <i className={"bi bi-calendar3 me-1"}></i>
                <span>{t('profile.joined')} {new Date(userInfo?.create_at).toLocaleString(true, {dateStyle: "medium"})}</span>
              </div>
            )}
            {userInfo?.profile?.website !== "" && (
              <div className={"text-muted d-flex align-items-center"}>
                <i className={"bi bi-link me-1"}></i>
                <Link to={userInfo?.profile?.website} className={"text-truncate d-inline-block"}
                      style={{maxWidth: 200}}>{userInfo?.profile?.website}</Link>
              </div>
            )}
          </div>

          <div className="">
            <small className="following-N">
              <span className=" mx-1">{userInfo?.following?.length}</span><span
              className="me-1 text-body-secondary">{t('profile.following')}</span>
            </small>
            <small className="following-N">
              <span className=" mx-1">{userInfo?.followers?.length}</span><span
              className="ms-12 text-body-secondary">{t('profile.followers')}</span>
            </small>
          </div>
        </div>
      </div>
    );
  }


  return (
    <section className={"h-100"}>
      <ProfileSection/>
      <div
        className="mt-1"
        id="explore-group"
        role="group"
      >
        <ul
          className="nav nav-pills nav-justified mt-2 col-10 w-100 fs-6 fw-5  d-flex justify-content-around align-items-center"
          role="tablist"
        >

          <li className="nav-item" role="presentation">

            <button
              className="nav-link nav-links trend-bar nav-tabs border-color  active focus"
              id="pills-foryou-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Tweets"
              type="button"
              role="tab"
              aria-controls="pills-Tweets"
              aria-selected="true"
            >
              {t('profile.tweet')}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link  nav-links trend-bar nav-tabs border-color"
              id="pills-Trending-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Replies"
              type="button"
              role="tab"
              aria-controls="pills-Replies"
              aria-selected="false"
            >
              {t('profile.replies')}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-links border-color"
              id="pills-News-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Media"
              type="button"
              role="tab"
              aria-controls="pills-Media"
              aria-selected="false"
            >
              {t('profile.media')}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link  nav-links trend-bar  nav-tabs-border-color"
              data-bs-toggle="pill"
              id="pills-Sports-tab"
              data-bs-target="#pills-Likes"
              type="button"
              role="tab"
              aria-controls="pills-Likes"
              aria-selected="false"
            >
              {t('profile.likes')}
            </button>
          </li>
        </ul>
      </div>


      <div className="tab-content show" id="pills-tabContent">
        {/* <!--------------------- Tweets ---------> */}

        <div
          className="tab-pane nav-tabs fade pt-2 show active"
          id="pills-Tweets"
          role="tabpanel"
          aria-labelledby="pills-Tweets-tab"
          tabIndex="0"
        >
          <div className={"d-flex flex-column"}>
            {userTweets?.length && userTweets.map(tweet => {
              return (
                <Card
                  key={tweet.id}
                  tweet={tweet}
                  
                  withoutRoutProfile
                />
              )
            })}
          </div>
        </div>


        {/*<!--------------------- Replies --------->*/}

        <div
          className="tab-pane fade"
          id="pills-Replies"
          role="tabpanel"
          aria-labelledby="pills-Replies-tab"
          tabIndex="0"
          
        >
          <div className={"d-flex flex-column"}>
            {replies?.length && replies.map(reply => {
              return (
                <Card
                  key={reply.id}
                  tweet={reply}
                  reply={true}
                  withoutRoute
                >
                  <Card
                    key={reply?.tweet.id}
                    tweet={reply?.tweet}
                    border={false}
                  />
                </Card >
              )
            })}
          </div>
        </div>


        {/*    /!* <!---------------------  Media  --------------> *!/*/}

        <div
          className="tab-pane tab-content fade"
          id="pills-Media"
          role="tabpanel"
          aria-labelledby="pills-Media-tab"
          tabIndex="0"
        >
          <div className={"d-flex text-center p-3 flex-column align-items-center "}>
            <img src={mediaImage} style={{width: "60%", height: "60%"}}
                 className="rounded-circle " alt="..."/>
            <h2>
            {t('profile.media_head')} 
            </h2>
            <p className={"text-muted text-wrap fw-light text-center"}>{t('profile.media_txt')}</p>
          </div>
        </div>

        {/* <!---------------------  Likes  --------------> */}

        <div
          className="tab-pane fade"
          id="pills-Likes"
          role="tabpanel"
          aria-labelledby="pills-Likes-tab"
          tabIndex="0"
          dir='auto'
        >
          <div className={"d-flex flex-column p-0"}>
            <div className={"px-4"}>
              <h2 className={"fw-bold"}> {t('explore.how_follow')}</h2>
            </div>
            <SuggestionFollow username={"mostafaAbdElHady"} fullname={"Mostafa Abd ElHady 🧑‍💻"}
                              profileImage={"https://picsum.photos/220"}/>
            <SuggestionFollow username={"ahmedKhaled"} fullname={"Ahmed Khaled 💪"}
                              profileImage={"https://picsum.photos/220"}/>
            <SuggestionFollow username={"safaAbdElNaser"} fullname={"Safa Abd ElNaser ❤️"}
                              profileImage={"https://picsum.photos/220"}/>
            <SuggestionFollow username={"engyMohamed"} fullname={"Engy Mohamed 🍂"}
                              profileImage={"https://picsum.photos/220"}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default authGuard(Profile)
