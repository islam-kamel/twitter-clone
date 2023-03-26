import React from 'react';
import '../Trends/trends.scss';
import TrendsOpenion from '../TrendsOpenion/trendsOpenion';

const Trends = (props) => {

    console.log(props);

    return (
        <div class="trend-card py-2">
        <div class="trending-part d-flex justify-content-between text-center  ">
            <h5 class="text-secondary ms-3">{props.trendPlace}</h5>
            {/* <!-- <div class="text-center"> --> */}

            {/* <!-- Default dropstart button --> */}
            <div class=" dropstart d-flex flex-column align-items-end">

            <TrendsOpenion className='trends-option' interestedTrend='Not Interested in this' harmfulTrend='This Trend is harmful'  ></TrendsOpenion>
                 
              
                <h4 class="me-2">{props.trendName}</h4>
            </div>

            {/* <!-- </div> --> */}
        </div>
        <h5 class="text-secondary ms-3">{props.trendTweets}</h5>
    </div>

    );
}

export default Trends;
