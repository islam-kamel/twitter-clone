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

const TweetDetails = () => {
  const params = useLocation();
  console.log(params);
  const axios = useAxiosPrivate();
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();


  // const getComments = useCallback(async () => {
  //   const data = await axios
  //     .get(`/api/tweet/comment/${params?.state?.tweet.id}`)
  //     .then((response) => response.data);
  //
  // }, [params?.state?.tweet?.id, axios]);

  const handleCreateComment = useCallback((validate) => {
    const date = {...validate, comment: params?.state?.tweet?.id}
    dispatch(createComment(date))
      .unwrap()
      .finally(() => {
        dispatch(fetchCommentsList({tweetId: params?.state?.tweet?.id}))
      })
  }, [dispatch, params?.state?.tweet?.id]);

  useEffect(()=>{
    if(params?.state?.tweet)
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
      <Card tweet={params?.state?.tweet} withoutRoute />
      <div className={`border-top`}></div>
      <NewTweet
        placeholder={"Write comment"}
        buttonText={"Comment"}
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
