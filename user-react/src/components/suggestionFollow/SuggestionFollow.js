import {verifyBlue} from "../../constants/icons";
import TwButton from "../tw-button/tw-button";
import React, {useCallback, useEffect, useState} from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useDispatch, useSelector} from "react-redux";
import {getNewSuggestion} from "../../store/features/suggestionFollow/suggetstionFollow";
import {useTranslation} from "react-i18next";

export function FollowButton({username}) {
  const axios = useAxiosPrivate();
  const [isFollowing, setIsFollowing] = useState();
  const [disabled, setDisabled] = useState(false);
  const [t] = useTranslation();
  const currentUser = useSelector(state => state.currentUser.userProfile);

  useEffect(() => {
    const exist = currentUser.following.find(item => {
      return item.following.username === username
    })
    if (exist) {
      setIsFollowing(true)
    }
  }, [currentUser.following, username])

  const handleFollow = useCallback(async () => {
    setDisabled(true)
    try {
      const response = await axios.put(`api/user/follow/${username}`)
      if (response.status === 200) {
        if (response.data.state === "follow") {
          setIsFollowing(true)

        } else {
          setIsFollowing(false)
        }
      }
    } catch (e) {
      console.log(e.response.message || e.response.data)
    }
    setDisabled(false)
  }, [axios, username])

  return (
    <TwButton
      other={{
        onClick: handleFollow,
        disabled: disabled,
      }}
      btnStyle={"dark"}
      classes={"rounded-pill"}
    >
      {isFollowing ? t("explore.how_follow_not") : t("explore.how_follow_f")}
    </TwButton>
  );
}

export function SuggestionFollow(props) {
  const suggestionList = useSelector(state => state.suggestionFollow.suggestions)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getNewSuggestion())
  }, [dispatch])
  return (
    <>
      {suggestionList?.length && suggestionList.map(user => {
        return (
          <div key={user.id} className={"tweet-card-hover"} role={'button'}>
            <div className="p-4 w-100 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center justify-content-center ">
                <img
                  src={process.env.REACT_APP_MEDIA_BASE_URL + user?.image}
                  className="rounded-circle tw-profile-image"
                  alt="..."
                />
                <div className="ms-3">
                  <div className={"d-flex justify-content-start"}>
                    <h6
                      className={"m-0 fw-bold me-1 text-truncate"}
                      style={{maxWidth: 90}}
                    >
                      {user?.fullname}
                    </h6>
                    {user?.is_verify && <span className={"text-primary tw-navbar-icon"}>{verifyBlue}</span>}
                  </div>
                  <span className="text-muted fw-light">@{user?.username}</span>
                </div>
              </div>
              <FollowButton username={user?.username}/>
            </div>
          </div>
        );
      })}
    </>
  );
}
