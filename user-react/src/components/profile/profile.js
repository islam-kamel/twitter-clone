import React, {useEffect} from "react";
import "./profile.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import ProfileModal from "./profileModal";
import Card from "../card/card";
import authGuard from "../../guards/authGuard";
import {SuggestionFollow} from "../suggestionFollow/SuggestionFollow";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUserTweets} from "../../store/features/user/user";
import {fetchReplies} from "../../store/features/replies/replies";

const mediaImage = require("../../Image/media.png")
const profileImage = require("../../assets/profile.image.jpg");


function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const back = location.state?.from?.pathname || "/";
  const userInfo = useSelector(state => state.currentUser.userProfile)
  const {tweets: userTweets, replies} = useSelector(state => {return {...state.currentUser, ...state.replies}})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUserTweets({username: userInfo.username}))
    dispatch(fetchReplies({username: userInfo.username}))
  }, [dispatch, userInfo.username])
  const ProfileSection = () => {
    return (
      <>
        <div className="row row-cols-auto align-items-center mt-3 mx-0">
          <div className="mx-2">
            <i
              onClick={() => {
                navigate(back, {state: {from: location.pathname}})
              }}
              role={"button"}
              className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"
            ></i>
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
                <span>Born {new Date(userInfo?.birthdate).toLocaleString(true, {dateStyle: "medium"})}</span>
              </div>
            )}

            {userInfo?.profile?.create_at !== "" && (
              <div className={"text-muted d-flex align-items-center"}>
                <i className={"bi bi-calendar3 me-1"}></i>
                <span>Joined {new Date(userInfo?.create_at).toLocaleString(true, {dateStyle: "medium"})}</span>
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
              className="me-1 text-body-secondary">Following</span>
            </small>
            <small className="following-N">
              <span className=" mx-1">{userInfo?.followers?.length}</span><span
              className="ms-12 text-body-secondary">Followers</span>
            </small>
          </div>
        </div>
      </>
    );
  }


  return (
    <section className={"border h-100"}>
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
              Tweet
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
              Replies
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
              Media
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
              Likes
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
            {userTweets.length && userTweets.map(tweet => {
              return (
                <Card
                  key={tweet.id}
                  tweet={tweet}
                  // tweetId={tweet.id}
                  // name={tweet.user.fullname}
                  // username={tweet.user.username}
                  // text={tweet.content}
                  // img={tweet.user.image}
                  // media={tweet.media}
                  // createAt={tweet.create_at}
                  // comments={tweet.comments}
                  // likes={tweet.likes}
                  // replies={tweet.replies}
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
            {replies.length && replies.map(reply=> {
              return (
                <Card
                  key={reply.id}
                  tweet={reply}
                >
                  <Card
                    key={reply?.tweet.id}
                    tweet={reply?.tweet}
                    border={false}
                  />
                </Card>
              )
            })}
            <Card
              name=" Engy Mo"
              text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
              username="@engy5821 .2h" img={profileImage}
            >
            <Card
              name=" Engy Mo"
              text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
              username="@engy5821 .2h" img={profileImage}
            />
            </Card>
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
              Lights, camera … attachments!
            </h2>
            <p className={"text-muted text-wrap fw-light text-center"}>When you send Tweets with photos or
              videos in them, they will show up here.</p>
          </div>
        </div>

        {/* <!---------------------  Likes  --------------> */}

        <div
          className="tab-pane fade"
          id="pills-Likes"
          role="tabpanel"
          aria-labelledby="pills-Likes-tab"
          tabIndex="0"
        >
          <div className={"d-flex flex-column p-0"}>
            <div className={"px-4"}>
              <h2 className={"fw-bold"}> Who to follow</h2>
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
