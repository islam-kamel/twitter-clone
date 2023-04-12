import React from "react";
import "./card.style.scss"
import {Link} from "react-router-dom";
import {chart, comment, like, newFollow, replay, share, threeDots} from "../../constants/icons";
import TwDropdown from "../twDropdown/TwDropdown";
import "../main-sidebar/twitter.main.css"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import moment from "moment";

function BuildMedia(props) {

  return (
    props.media?.map(item => {
      const isVideo = /\.(mp4|webm|ogg)$/i.test(item.file);

      if (isVideo) {
        return (
          <div key={item.id} className={"card p-0 px-1 border-0"}>
            <video controls={true}
                   className={"img-fluid card-img "}
                   preload={"metadata"}>
              <source
                src={`${process.env.REACT_APP_MEDIA_BASE_URL + item.file}`}/>
            </video>
          </div>
        )
      } else {
        return (
          <div key={item.id} className={"card p-0 px-2 border-0"}>
            <img className={"card-img img-fluid "}
                 src={`${process.env.REACT_APP_MEDIA_BASE_URL + item.file}`}
                 alt={".."}/>
          </div>
        );
      }
    })
  )
}

const Card = (props) => {
  const axiosPrivate = useAxiosPrivate();
  const removeTweet = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/tweet/remove/${props?.tweetId}`;
    axiosPrivate.delete(url)
      .then(res => console.log(res.data))
  }
  return (
    <div className={"row p-3 border-top gx-0"}>
      <div className={"col-12 me-3"}>
        <div className={"d-flex "}>
          <img src={`${process.env.REACT_APP_BASE_URL + "/api" + props.img}`} alt=""
               className="tw-profile-image  rounded-circle"/>
          <div
            className={"d-flex ms-2 justify-content-between align-items-start align-items-start w-100"}>
            <div>
              <Link
                to="#"
                className="tweeter_name text-decoration-none text-dark"
              >
                {props.name}
                <span className={"ms-2 text-muted"}>@{props.username} </span>
              </Link>
              <span className={"text-muted fw-light ms-2"}>
                                {moment(props.createAt).fromNow()}
                            </span>
            </div>

            <TwDropdown
              down={true}
              toggle={
                <TwDropdown.Toggle>{threeDots}</TwDropdown.Toggle>
              }
            >
              <Link
                to={"#"}
                className={"text-decoration-none dropdown-item-text"}
              >
                <div
                  className={"d-flex align-items-center flex-row-reverse justify-content-between"}>
                  <i className={"ms-2"} style={{width: 20}}>{newFollow}</i>
                  <span>Follow {props?.username}</span>
                </div>
              </Link>
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
            </TwDropdown>
          </div>
        </div>
      </div>
      <div className={"col-11 ms-5 ps-2 mt-2"}>
        <div className={"d-flex flex-column mt-2"}>
          <div className={"row row-cols-1"}>
            <p className={"fw-light  p-0"} style={{fontSize: 15}}> {props.text}.</p>
            <div className={"row row-cols-auto gy-2"}>
              <BuildMedia media={props?.media}/>
            </div>
          </div>
          <div className="tweet_icons text-muted">
            <div className={"icon"}>
              <i className={"icon icon-1"}>{comment}</i>
              <span className={"ms-1"}>300</span>
            </div>

            <div className={"icon"}>
              <i className={"icon-2 icon"}>{replay}</i>
              <span className={"ms-1"}>300</span>
            </div>

            <div className={"icon"}>
              <i className={"icon-3 icon"}>{like}</i>
              <span className={"ms-1"}>300</span>
            </div>

            <div className={"icon"}>
              <i className={"icon-4 icon"}>{chart}</i>
              <span className={"ms-1"}>300</span>
            </div>
            <div className={"icon"}>
              <i className={"icon-5 icon"}>{share}</i>
              <span className={"ms-1"}>300</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
