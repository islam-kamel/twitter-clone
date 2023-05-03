import Card from "../components/card/card";
import {useLocation} from "react-router-dom";

function TweetDetails(props) {
    const location = useLocation();
    const {tweet} = location.state;

    return (
        <>
          {JSON.stringify(tweet)}
            {/*<Card*/}
            {/*    key={tweet?.id}*/}
            {/*    tweetId={tweet?.id}*/}
            {/*    name={tweet?.user?.fullname}*/}
            {/*    username={tweet?.user?.username}*/}
            {/*    text={tweet?.content}*/}
            {/*    img={tweet?.user?.image}*/}
            {/*    media={tweet?.media}*/}
            {/*/>*/}
        </>
    )
}

export default TweetDetails;
