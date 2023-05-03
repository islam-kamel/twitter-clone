import React, { useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { NewTweet } from "../home/home";
import ShowRepliesTweet from "./showRepliesTweet";
import { useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TweetDetails = () => {
  const parms = useLocation();
  console.log(parms);
  const axios = useAxiosPrivate();
  const [commentsList, setcommentsList] = useState([]);

  const getComments = useCallback(async () => {
    const data = await axios
      .get(`/api/tweet/comment/${parms?.state?.tweet.id}`)
      .then((response) => response.data);
    setcommentsList(data);
  
  }, [parms?.state?.tweet?.id, axios]);

  const createComment = useCallback((vaildata) => {
    console.log(vaildata);
    axios
      .post(
        "/api/tweet/comment",
        { ...vaildata, tweet: parms?.state?.tweet?.id },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        console.log(response.data);
        getComments();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(()=>{
    if(parms?.state?.tweet)
    {
        getComments();
    }
   
  },[])
  return (
    <>
      <div className={`mt-3`}></div>
      <Card tweet={parms?.state?.tweet} withoutRoute />
      <div className={`border-top`}></div>
      <NewTweet
        placeholder={"Write comment"}
        buttonText={"Comment"}
        callBackFunction={createComment}
      />
      {commentsList.length && commentsList.map((comment) => {
       
       return <Card tweet={comment}/>
        
      })}
    </>
  );
};

export default TweetDetails;
