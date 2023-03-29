import React from 'react'
import '../TrendsOpenion/trendsOpenion.scss'

const TrendsOpenion = (props) => {
    console.log(props);
    return (
       
            <i class="fa-solid fa-ellipsis fa-1x dropdown-toggl text-secondary p-1 me-3"
                   data-bs-toggle="dropdown" aria-expanded="false">

                    <ul class="dropdown-menu trends">
                        {/* <!-- Dropdown menu links --> */}
                        <li class=" px-4 py-2 " style={{fontSize:9}}><i class="fa-regular fa-face-frown mx-2"></i>
                            {props.interestedTrend}
                        </li>
                        <hr/>
                        <li class=" px-4 py-2 " style={{fontSize:9}}><i class="fa-regular fa-face-frown mx-2"></i>
                            {props.harmfulTrend}
                        </li>
                    </ul>
                </i> 
        
    );
}

export default TrendsOpenion;
