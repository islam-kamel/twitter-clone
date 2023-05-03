import React, { useEffect, useRef, useState } from "react";
import "./card.style.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  chart,
  comment,
  newFollow,
  replay,
  share,
  threeDots,
  verifyBlue,
} from "../../constants/icons";
import TwDropdown from "../twDropdown/TwDropdown";
import "../main-sidebar/twitter.main.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTweets,
  likeTweet,
  retweet,
} from "../../store/features/tweets/tweets";
import { fetchCurrentUserTweets } from "../../store/features/user/user";
import { fetchReplies, likeReply } from "../../store/features/replies/replies";
import TweetDetails from "../showTweet/TweetDetails ";

function BuildMedia(props) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(props.item.file);
  const Video = () => {
    return (
      <video
        controls={true}
        className={"img-fluid rounded"}
        preload={"metadata"}
      >
        <source
          src={`${process.env.REACT_APP_MEDIA_BASE_URL + props.item.file}`}
        />
      </video>
    );
  };
  const Image = () => {
    return (
      <img
        className={"img-fluid rounded"}
        src={`${process.env.REACT_APP_MEDIA_BASE_URL + props.item.file}`}
        alt={".."}
      />
    );
  };
  return isVideo ? <Video /> : <Image />;
}

const Card = ({ border = true, ...props }) => {
  const axiosPrivate = useAxiosPrivate();
  const likeBtn = useRef(null);
  const userInfo = useSelector((state) => state.currentUser.userProfile);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweet, setIsRetweet] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const find = props?.tweet.likes?.users_list.find(
      (value) => value === userInfo.id
    );
    find && setIsLiked(true);
    const isRetweet = props?.tweet.replies?.users_list.find(
      (value) => value === userInfo.id
    );
    isRetweet && setIsRetweet(true);
  }, [props, userInfo]);

  const handleLike = (e) => {
    e.stopPropagation();
    const likeMethod = props?.reply ? likeReply : likeTweet;
    let obj;
    if (props.reply) {
      obj = { replyId: props?.tweet?.id };
    } else {
      obj = { tweetId: props?.tweet?.id };
    }
    likeBtn.current.classList.toggle("liked");
    dispatch(likeMethod(obj))
      .unwrap()
      .then((_) => {
        dispatch(fetchTweets())
          .unwrap()
          .finally(() => {
            dispatch(fetchReplies({ username: userInfo.username }));
          });
      })
      .finally(() => {
        if (userInfo.id === props?.tweet.user.id) {
          dispatch(fetchCurrentUserTweets({ username: userInfo.username }));
        }
      });
  };

  const removeTweet = () => {
    if (userInfo?.id === props?.tweet?.user?.id) {
      const url = `${process.env.REACT_APP_BASE_URL}/api/tweet/remove/${props?.tweet.id}`;
      axiosPrivate.delete(url).then((res) => console.log(res.data));
      
    }
  };

  const handleRetweet = () => {
    dispatch(retweet({ tweetId: props.tweet.id }))
      .unwrap()
      .finally(() => {
        dispatch(fetchTweets());
      });
  };

  const navigate = useNavigate();
  const showDetailsOfCard = () => {
    console.log("hi safaaaaaaaaaa");
    if (props?.tweet && !props?.withoutRoute) {
      navigate(`/details/${props?.tweet?.content.split(" ", 10).join("-")}`, {
        state: { tweet: props?.tweet },
      });
      console.log(props)
    }

    // console.log(props?.tweet);
  };
//   useEffect(()=>{
// if(!props?.tweet)
// {
// navigate("/");
// }
//   },[])

  
  return (
    <div
      className={` p-3 ${border ? "border-top" : ""} tweet-card-hover`}
      onClick={showDetailsOfCard}
    >
      <div
        className={"me-3"}
        onClick={(e) => {
          e.stopPropagation();
          if (!props?.withoutRoutProfile) {
            navigate(`/profile/${props?.tweet?.user.fullname}`,{replace:true});
            console.log("profile of user");
          }
        
        }}
      >
        <div className={"d-flex"}>
          <img
            src={`${
              process.env.REACT_APP_BASE_URL + "/api" + props?.tweet?.user.image
            }`}
            alt=""
            className="tw-profile-image  rounded-circle"
          />
          <div
            className={
              "d-flex ms-2 justify-content-between align-items-start w-100"
            }
          >
            <div
              className={
                "d-flex justify-content-between w-100 align-items-center"
              }
            >
              <Link
                to="#"
                className="tweeter_name text-decoration-none text-dark flex-grow-0 flex-shrink-0"
              >
                <div className={"d-flex"}>
                  <span>{props?.tweet?.user.fullname}</span>
                  <span
                    className={"ms-2 text-muted text-truncate d-block"}
                    style={{ maxWidth: "90%" }}
                  >
                    @{props?.tweet?.user.username}
                  </span>
                  {props?.tweet?.user?.is_verify && (
                    <span className={"text-primary tw-navbar-icon ms-1"}>
                      {verifyBlue}
                    </span>
                  )}
                </div>
              </Link>
              <span
                className={
                  "text-muted fw-light ms-2 text-truncate flex-shrink-1 flex-grow-0 me-1"
                }
                style={{
                  maxWidth: 60,
                  fontSize: 12,
                }}
              >
                {moment(props?.tweet?.create_at).fromNow()}
              </span>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <TwDropdown
                down={true}
                toggle={<TwDropdown.Toggle>{threeDots} </TwDropdown.Toggle>}
              >
                {userInfo.id !== props?.tweet?.user?.id ? (
                  <Link
                    to={"#"}
                    className={"text-decoration-none dropdown-item-text"}
                  >
                    <div
                      className={
                        "d-flex align-items-center flex-row-reverse justify-content-between"
                      }
                    >
                      <i className={"ms-2"} style={{ width: 20 }}>
                        {newFollow}
                      </i>
                      <span>Follow {props?.tweet?.user.username}</span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    to={"#"}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTweet();
                    }}
                    className={"text-decoration-none dropdown-item-text"}
                  >
                    <div
                      className={
                        "d-flex align-items-center text-danger flex-row-reverse justify-content-between"
                      }
                    >
                      <i
                        className={"ms-2 bi bi-trash"}
                        style={{ width: 20 }}
                      ></i>
                      <span>Remove</span>
                    </div>
                  </Link>
                )}
              </TwDropdown>
            </div>
          </div>
        </div>
      </div>

      <div className={"ms-5 ps-2 mt-2"}>
        <div className={"row row-cols-1 m-0"}>
          <p dir={"auto"} className={"fw-light p-0"} style={{ fontSize: 15 }}>
            {" "}
            {props?.tweet?.content}
          </p>
          {props?.children}

          <div
            className={"tweet-image p-0"}
            onClick={(e) => {
              e.stopPropagation();
              console.log("hello");
            }}
          >
            {props?.tweet?.media?.map((item, index) => {
              return <BuildMedia key={index} item={item} />;
            })}
          </div>
          <div
            className="tweet_icons text-muted ps-0 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={"icon-button"} 
            onClick={()=>{
              if (!props?.withoutRoute) {
                navigate(`/details/${props?.tweet?.content.split(" ", 10).join("-")}`, {
                  state: { tweet: props?.tweet },
                });
                
              }
            }
             
            }
            >
              <div className={"icon-bg i-bg-primary"}>{comment}</div>
              <span className={"icon-amount"}>
                {props?.tweet?.comments?.count}
              </span>
            </div>

            <TwDropdown
              down={true}
              toggle={
                <TwDropdown.Toggle>
                  <div className={"icon-button"}>
                    <div className={"icon-bg i-bg-second"}>{replay}</div>
                    <span className={"icon-amount"}>
                      {props?.tweet?.replies?.count}
                    </span>
                  </div>
                </TwDropdown.Toggle>
              }
            >
              <div
                onClick={handleRetweet}
                role={"button"}
                className={"dropdown-item-text"}
              >
                <div
                  className={
                    "d-flex fw-bolder align-items-center flex-row-reverse justify-content-between"
                  }
                >
                  <span>{isRetweet ? "Undo Retweet" : "Retweet"}</span>
                  <div className={"me-2"} style={{ width: 20 }}>
                    {replay}
                  </div>
                </div>
              </div>
            </TwDropdown>

            <div className={"icon-button"}>
              <div onClick={handleLike} className={"icon-bg bg-heart"}>
                <div
                  ref={likeBtn}
                  className={`heart-icon ${isLiked && "liked"}`}
                ></div>
              </div>
              <div className={"like-amount icon-amount"}>
                {props?.tweet?.likes?.count}
              </div>
            </div>
            {userInfo.id === props?.tweet?.user.id && (
              <div className={"icon-button"}>
                <div className={"icon-bg i-bg-primary"}>{chart}</div>
                <div className={"view-amount icon-amount"}>300</div>
              </div>
            )}
            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>{share}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
