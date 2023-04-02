import React from 'react'
import '../TrendsOpenion/trendsOpenion.scss'

const TrendsOpenion = (props) => {
    console.log(props);
    return (
       
            <i class="fa-solid fa-ellipsis fa-1x dropdown-toggl text-dark p-1 me-3"
                   data-bs-toggle="dropdown" aria-expanded="false">

                    <ul class="dropdown-menu trends" style={{fontSize:10,}}>
                        {/* <!-- Dropdown menu links --> */}
                        <div className='d-flex justify-content-center align-items-center' style={{height:'30px'}}>
                            <li class="  py-1 " style={{fontSize:9}}><i class="fa-regular fa-face-frown mx-2"></i>
                            
                            </li>
                                                <span className=''> {props.interestedTrend}</span>
                        </div>
                        <hr style={{margin:0}}/>
                        <div className='d-flex justify-content-center align-items-center' style={{height:'30px'}} >
                            <li class=" py-1 " style={{fontSize:9}}><i class="fa-regular fa-face-frown mx-2"></i>
                            
                            </li>
                            <span> {props.harmfulTrend}</span>
                        </div>
                    </ul>
                </i> 
        
    );
}

export default TrendsOpenion;

export const UserSignDropdown=(props)=>{
    return (<>
    
    <i class="fa-solid fa-ellipsis fa-1x dropdown-toggl text-dark p-1 me-3"
                   data-bs-toggle="dropdown" aria-expanded="false">

                    <ul class="dropdown-menu trends" style={{fontSize:10,}}>
                        {/* <!-- Dropdown menu links --> */}
                        <div className='d-flex justify-content-center align-items-center' style={{height:'30px'}}>
                          
                                                <span className=''> {props.addAccount}</span>
                        </div>
                        <hr style={{margin:0}}/>
                        <div className='d-flex justify-content-center align-items-center' style={{height:'30px'}} >
                          
                            <span> {props.logOut}</span>
                        </div>
                    </ul>
                </i> 

    </> );
    }
    




