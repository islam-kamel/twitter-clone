import React, { useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { NewTweet } from "../home/home";
import ShowRepliesTweet from "./showRepliesTweet";
import { useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useDispatch, useSelector} from "react-redux";
import {createComment, fetchCommentsList} from "../../store/features/comments/comments";
import LoadingSpinner from "../Loading/loading-spinner";
import {fetchTweets} from "../../store/features/tweets/tweets";
import {fetchReplies} from "../../store/features/replies/replies";
import {fetchCurrentUserTweets} from "../../store/features/user/user";
import {likeTweet} from "../../store/features/tweets/tweets";

const TweetDetails = (props) => {
  const params = useLocation().state || props;
  console.log(params);
  const axios = useAxiosPrivate();
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();


  // const getComments = useCallback(async () => {
  //   const data = await axios
  //     .get(`/api/tweet/comment/${params?.tweet.id}`)
  //     .then((response) => response.data);
  //
  // }, [params?.tweet?.id, axios]);

  const handleCreateComment = useCallback((validate) => {
    const date = {...validate, comment: params?.tweet?.id}
    dispatch(createComment(date))
      .unwrap()
      .finally(() => {
        dispatch(fetchCommentsList({tweetId: params?.state?.tweet?.id}))
      })
  }, [dispatch, params?.state?.tweet?.id]);

  useEffect(()=>{
    if(params?.tweet)
    {
       dispatch(fetchCommentsList({tweetId: params?.state?.tweet?.id}))
    }
   
  },[dispatch, params?.state?.tweet])


    const handleLike = useCallback((e) => {
      console.log("like")
      dispatch(likeTweet({tweetId: params?.state?.tweet?.id}))
      // dispatch(fetchCommentsList({tweetId: params?.state?.tweet?.id}));
    }, [dispatch, params?.state?.tweet?.id]);
  return (
    <>
      <div className={`mt-3`}></div>
      <Card tweet={params?.tweet} withoutRoute />
      <div className={`border-top`}></div>
      <NewTweet
        placeholder={"Write comment"}
        buttonText={"reply"}
        callBackFunction={handleCreateComment}
      />

      {
        comments?.loading ? <LoadingSpinner/> : (
          comments?.list?.length && comments?.list?.map(comment => <Card key={comment?.id} handleLike={handleLike} tweet={comment}/>)
        )
      }
    </>
  );
};

export default TweetDetails;
