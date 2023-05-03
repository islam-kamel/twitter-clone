import {threeDots} from "../../constants/icons";
import Card from "../card/card";
import TwDropdown from "../twDropdown/TwDropdown";
import {Link} from "react-router-dom";
import authGuard from "../../guards/authGuard";
import { useEffect, useState } from "react";
import {axiosInstance} from "../../store/API/axios";
import {useSelector} from "react-redux";
 


function Bookmarks() {
  const [tweets,settweets]=useState([]);
  const userInfo = useSelector(state => state.currentUser.userProfile);
  useEffect(()=>{
     axiosInstance.get("/api/tweet/")
      .then(res=>
        settweets(res.data)).catch((error)=>{
          console.log(error);
      })
  },[])
  return (
    <div className={"container h-100 border p-0"}>
      <div className={"d-flex flex-column p-0"}>
        <div className={"d-flex p-3 flex-row-reverse justify-content-between align-items-center"}>
          <TwDropdown
            down={true}
            toggle={
              <TwDropdown.Toggle>
                <span role={"button"}>{threeDots}</span>
              </TwDropdown.Toggle>
            }
          >
            <Link to={"#"} className={"text-danger text-decoration-none"}>{t('bookmarks.remove_bookmarks')}</Link>
          </TwDropdown>
          <div className={"d-flex flex-column"}>
            <h1 className={"fw-bold m-0"}>Bookmarks</h1>
            <span className={"text-muted"}>@{userInfo.username}</span>
          </div>
        </div>
  
          {
            tweets.length&&
            tweets.map((tweet)=>{
              return <Card
              key={tweet.id} 
              tweet={tweet}
            /> 
            })
          }
         

        
      </div>
    </div>
  );
}

export default authGuard(Bookmarks);
