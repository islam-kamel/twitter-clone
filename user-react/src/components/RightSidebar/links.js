import React from "react";
import "./links.css"

const Links = (props) => {
  return (
    <>
      <a className="a-style" href={props.url}>{props.name} </a>
    </>
  );
}

export default Links;
