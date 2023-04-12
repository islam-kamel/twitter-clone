import React from "react";

class TwDropdown extends React.Component {
  static Toggle(props) {
    return (
      <span
        role="button"
        className=""
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.children}
      </span>
    );
  }

  render() {
    return (
      <div className={this.props.down ? "dropdown" : "dropup"}>
        {this.props.toggle}
        <ul className={`dropdown-menu rounded-4 ${this.props.classes}`}>
          {this.props.children?.length
            ? this.props.children.map((el, i) => {
              return <li key={i} className={"dropdown-item my-2"}>{el}</li>
            })
            : <li className={"dropdown-item my-2"}>{this.props.children}</li>}
        </ul>
      </div>
    );
  }


}

export default TwDropdown;
