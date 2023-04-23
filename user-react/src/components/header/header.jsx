import React from "react";

class Header extends React.Component {

  static Top(props) {
    return (
      <div className="d-flex flex-row justify-content-between ">
        {props?.children}
      </div>
    )
  }

  static Down(props) {
    return (
      <div className="d-flex flex-row justify-content-around">
        {/*<h3 style={{fontSize: "18px", fontWeight: "400"}}>For you </h3>*/}
        {/*<h3 style={{fontSize: "18px", fontWeight: "400"}}>Following </h3>*/}
        {props?.children}
      </div>
    )
  }

  render() {
    return (
      <div
        className={`col-12 position-sticky top-0 z-1 main-div  ${this.props.noBorder ? "" : "border-bottom"} backdrop-blur`}
        style={{maxHeight: "fit-content"}}>
        {/*<div className="d-flex flex-row justify-content-between p-4">*/}
        {/*  <h1 style={{fontSize: "20px", fontWeight: "600"}}>Home</h1>*/}
        {/*</div>*/}
        {/*<div className="d-flex flex-row justify-content-around">*/}
        {/*  <h3 style={{fontSize: "18px", fontWeight: "400"}}>For you </h3>*/}
        {/*  <h3 style={{fontSize: "18px", fontWeight: "400"}}>Following </h3>*/}
        {/*</div>*/}
        {this.props?.children}
      </div>
    );
  }
}

export default Header;
