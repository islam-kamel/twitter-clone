import React from 'react'
import '../TrendsOpenion/trendsOpenion.scss'

const TrendsOpenion = (props) => {
    return (

        <i className="fa-solid fa-ellipsis fa-1x dropdown-toggl text-dark p-1 me-3"
           data-bs-toggle="dropdown" aria-expanded="false">

            <ul className="dropdown-menu trends">
                {/* <!-- Dropdown menu links --> */}
                <li className=" px-4 py-1 " style={{fontSize: 9}}><i className="fa-regular fa-face-frown mx-2"></i>
                    {props.interestedTrend}
                </li>
                <hr/>
                <li className=" px-4 py-1 " style={{fontSize: 9}}><i className="fa-regular fa-face-frown mx-2"></i>
                    {props.harmfulTrend}
                </li>
            </ul>
        </i>
    );
}

export default TrendsOpenion;
