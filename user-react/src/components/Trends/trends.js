import React from "react";
import "../Trends/trends.scss";
import TrendsOpinion from "../TrendsOpenion/trendsOpinion";
import { useTranslation } from "react-i18next";

const Trends = (props) => {

  const [t , translate]=useTranslation();

  return (
    <div className="trend-card py-2 ">
      <div className="trending-part d-flex justify-content-between text-center  ">
        <h5 className="text-secondary ms-3 fs-6">{props.trendPlace}</h5>
        {/* <!-- <div class="text-center"> --> */}

        {/* <!-- Default dropstart button --> */}
        <div className=" dropstart d-flex flex-column align-items-end " dir={t('dir')}>

          <TrendsOpinion className="trends-option" interestedTrend={t('explore.interestedTrend')}
                         harmfulTrend={t('explore.harmfulTrend')}></TrendsOpinion>


          <h4 className="me-2 fs-6" dir={t('dir')}>{props.trendName}</h4>
        </div>

        {/* <!-- </div> --> */}
      </div>
      <h5 className="text-secondary ms-3 fs-6">{props.trendTweets}</h5>
    </div>

  );
}

export default Trends;
