import React from 'react';
import './showReplies.css';
import Card from '../card/card';
import { useLocation } from 'react-router-dom';
const ShowRepliesTweet = (reply) => {
  const parms=useLocation();
  console.log(parms?.state?.tweet)
    return (
      <>
  
    <Card tweet={reply} withoutRoute/>
      </>
        
    );
}

export default ShowRepliesTweet;



