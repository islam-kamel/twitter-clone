import React from 'react';
import Card from '../card/card';
import { NewTweet } from '../home/home';
import ShowRepliesTweet from './showRepliesTweet';
import { useLocation, useParams } from 'react-router-dom';

const TweetDetails = () => {
    const parms=useLocation();
    console.log(parms);
    return (
        <>
           
            <h1>TweetDetails </h1>
            <Card tweet={parms?.state?.tweet} withoutRoute/>

            <NewTweet 
            placeholder={"Write comment"}
            buttonText={"Comment"}
            
            />
            <ShowRepliesTweet/>
            
        </>
    );
}

export default TweetDetails;
