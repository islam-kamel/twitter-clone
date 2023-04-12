import React from "react";
import "../Trends/trends.scss";
import TrendsOpinion from "../TrendsOpenion/trendsOpinion";

const Trends = (props) => {


  return (
    <div className="trend-card py-2 ">
      <div className="trending-part d-flex justify-content-between text-center  ">
        <h5 className="text-secondary ms-3 fs-6">{props.trendPlace}</h5>
        {/* <!-- <div class="text-center"> --> */}

        {/* <!-- Default dropstart button --> */}
        <div className=" dropstart d-flex flex-column align-items-end ">

          <TrendsOpinion className="trends-option" interestedTrend="Not Interested in this"
                         harmfulTrend="This Trend is harmful"></TrendsOpinion>


          <h4 className="me-2 fs-6">{props.trendName}</h4>
        </div>

        {/* <!-- </div> --> */}
      </div>
      <h5 className="text-secondary ms-3 fs-6">{props.trendTweets}</h5>
    </div>

  );
}

export default Trends;
