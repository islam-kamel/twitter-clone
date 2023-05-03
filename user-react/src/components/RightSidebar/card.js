import React from "react";
import "./card.css"
import {useTranslation} from "react-i18next";
const Cardtrandy = (props) => {
  const [t , translate]= useTranslation();
  return (
    <>
      <div className="trandy" dir={t('dir')} style={{
        width: "100%",
        height: "90%",
        marginTop: "5px",
        padding: "0 15px",
        fontSize: ".9em",
        fontWeight: "600"
      }}>
        <div className="div-trandy">
          <span style={{fontSize: "1.3", fontWeight: "400", paddingTop: "3px"}}> { props.trindname} </span>
          <i className="bi bi-three-dots icon_style"></i>
        </div>
        <p className={"fw-bold text-light"}
           style={{margin: "0", padding: "3px 0", fontWeight: "500"}}>{props.trindy}</p>
        <span style={{fontSize: "1.3", fontWeight: "400", paddingBottom: "3px"}}>{props.tweetnumber} {props.tweets}</span>
      </div>
    </>
  );
}

export default Cardtrandy;
