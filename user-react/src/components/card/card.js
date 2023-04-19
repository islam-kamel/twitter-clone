import React, {useEffect, useRef, useState} from "react";
import "./card.style.scss"
import {Link} from "react-router-dom";
import {chart, comment, newFollow, replay, share, threeDots} from "../../constants/icons";
import TwDropdown from "../twDropdown/TwDropdown";
import "../main-sidebar/twitter.main.css"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import moment from "moment";
import {useSelector} from "react-redux";

function BuildMedia(props) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(props.item.file);
  const Video = () => {
    return (
      <video
        controls={true}
        className={"img-fluid rounded"}
        preload={"metadata"}>
        <source
          src={`${process.env.REACT_APP_MEDIA_BASE_URL + props.item.file}`}
        />
      </video>
    )
  }
  const Image = () => {
    return (
      <img
        className={"img-fluid rounded"}
        src={`${process.env.REACT_APP_MEDIA_BASE_URL + props.item.file}`}
        alt={".."}
      />
    )
  }
  return (
    isVideo ? <Video/> : <Image/>
  )
}

const Card = ({border= true, ...props}) => {
  const axiosPrivate = useAxiosPrivate();
  const likeBtn = useRef(null);
  const userInfo = useSelector(state => state.currentUser.userProfile)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const find = props?.likes?.users_list.find(value => value === userInfo.id)
    find && setIsLiked(true)
  }, [props, userInfo])

  const handleLike = (e) => {
    e.stopPropagation()
    likeBtn.current.classList.toggle("liked")
    if (likeBtn.current.classList.contains("liked")) {
      console.log("like")
    } else {
      console.log("disLike");
    }
  }

  const removeTweet = () => {
    if (userInfo.id === props?.tweet.id) {
      const url = `${process.env.REACT_APP_BASE_URL}/api/tweet/remove/${props?.tweet.id}`;
      axiosPrivate.delete(url)
        .then(res => console.log(res.data))
    }
  }

  return (
    <div className={` p-3 ${border ? 'border-top': ''} tweet-card-hover`}>
      {isLiked}
      <div className={"me-3"}>
        <div className={"d-flex"}>
          <img src={`${process.env.REACT_APP_BASE_URL + "/api" + props?.tweet?.user.image}`} alt=""
               className="tw-profile-image  rounded-circle"/>
          <div
            className={"d-flex ms-2 justify-content-between align-items-start align-items-start w-100"}>
            <div>
              <Link
                to="#"
                className="tweeter_name text-decoration-none text-dark"
              >
                {props?.tweet?.user.fullname}
                <span className={"ms-2 text-muted"}>@{props?.tweet?.user.username} </span>
              </Link>
              <span className={"text-muted fw-light ms-2"}>
                {moment(props?.tweet?.create_at).fromNow()}
              </span>
            </div>

            <TwDropdown
              down={true}
              toggle={
                <TwDropdown.Toggle>{threeDots}</TwDropdown.Toggle>
              }
            >
              {userInfo.id !== props?.tweet?.user?.id ? (
                <Link
                  to={"#"}
                  className={"text-decoration-none dropdown-item-text"}
                >
                  <div
                    className={"d-flex align-items-center flex-row-reverse justify-content-between"}>
                    <i className={"ms-2"} style={{width: 20}}>{newFollow}</i>
                    <span>Follow {props?.tweet?.user.username}</span>
                  </div>
                </Link>
              ) : (
                <Link
                  to={"#"}
                  onClick={e => {
                    e.preventDefault();
                    removeTweet();
                  }}
                  className={"text-decoration-none dropdown-item-text"}
                >
                  <div
                    className={"d-flex align-items-center text-danger flex-row-reverse justify-content-between"}>
                    <i className={"ms-2 bi bi-trash"} style={{width: 20}}></i>
                    <span>Remove</span>
                  </div>
                </Link>
              )}

            </TwDropdown>
          </div>
        </div>
      </div>
      <div className={"ms-5 ps-2 mt-2"}>
        <div className={"row row-cols-1 m-0"}>
          <p className={"fw-light  p-0"} style={{fontSize: 15}}> {props?.tweet?.content}</p>
          {props?.children}
          <div
            className={"tweet-image p-0"}
            onClick={(e) => {
              e.stopPropagation()
              console.log("hello")
            }}
          >
            {props?.tweet?.media?.map((item, index) => {

              return (
                <BuildMedia key={index} item={item}/>
              )
            })}
          </div>
          <div className="tweet_icons text-muted ps-0 ">
            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>{comment}</div>
              <span className={"icon-amount"}>{props?.tweet?.comments?.count}</span>
            </div>

            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-second"}>{replay}</div>
              <span className={"icon-amount"}>{props?.tweet?.replies?.count}</span>
            </div>

            <div className={"icon-button"}>
              <div
                onClick={handleLike}
                className={"icon-bg bg-heart"}
              >
                <div ref={likeBtn} className={`heart-icon ${isLiked && "liked"}`}></div>
              </div>
              <div className={"like-amount icon-amount"}>{props?.tweet?.likes?.count}</div>
            </div>
            {userInfo.id === props?.tweet?.user.id && (
              <div className={"icon-button"}>
                <div className={"icon-bg i-bg-primary"}>
                  {chart}
                </div>
                <div className={"view-amount icon-amount"}>300</div>
              </div>
            )}
            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>
                {share}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
