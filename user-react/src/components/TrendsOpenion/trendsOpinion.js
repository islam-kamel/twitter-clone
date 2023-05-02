import React from "react"
import "../TrendsOpenion/trendsOpenion.scss"
import { useTranslation } from "react-i18next";

const TrendsOpinion = (props) => {

  const[t,translat]=useTranslation();

  return (

    <i className="fa-solid fa-ellipsis fa-1x dropdown-toggl text-dark p-1 me-3"
       data-bs-toggle="dropdown" aria-expanded="false" >
      <ul className="dropdown-menu trends" style={{fontSize: 10}}>
        {/* <!-- Dropdown menu links --> */}
        <div className="d-flex justify-content-center align-items-center" style={{height: "30px"}}>
          <li className="  py-1 " style={{fontSize: 9}}><i className="fa-regular fa-face-frown mx-2"></i>

          </li>
          <span className=""> {props.interestedTrend}</span>
        </div>
        <hr style={{margin: 0}}/>
        <div className="d-flex justify-content-center align-items-center" style={{height: "30px"}}>
          <li className=" py-1 " style={{fontSize: 9}}><i className="fa-regular fa-face-frown mx-2"></i>

          </li>
          <span> {props.harmfulTrend}</span>
        </div>
      </ul>
    </i>
  );
}

export const UserSignDropdown = (props) => {
  return (
    <>
      <i className="fa-solid fa-ellipsis fa-1x dropdown-toggl text-dark p-1 me-3"
         data-bs-toggle="dropdown" aria-expanded="false">

        <ul className="dropdown-menu trends" style={{fontSize: 10,}}>
          {/* <!-- Dropdown menu links --> */}
          <div className="d-flex justify-content-center align-items-center" style={{height: "30px"}}>

            <span className=""> {props.addAccount}</span>
          </div>
          <hr style={{margin: 0}}/>
          <div className="d-flex justify-content-center align-items-center" style={{height: "30px"}}>

            <span> {props.logOut}</span>
          </div>
        </ul>
      </i>
    </>
  );
}

export default TrendsOpinion;

