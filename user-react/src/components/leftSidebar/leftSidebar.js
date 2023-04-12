import React from "react";
import {NavLink} from "react-router-dom"
import {bookmarks, explore, home, lists, messages, more, notifications, profile, twitter} from "../../constants/icons";
import "./leftSidebar.style.scss";


const LeftSidebar = () => {
  return (
    <div className="left-pane">
      <div className="container">
        <div className="hedersection">
          <header>{twitter}</header>
          <nav>
            <NavLink to="/" activeClassName="selected">
              <span className="spanicon">{home} Home</span>
            </NavLink>
            <NavLink to="/explore" activeClassName="selected">
              <span className="spanicon">{explore} Explore</span>
            </NavLink>
            <NavLink to="/notifications" activeClassName="selected">
              <span className="spanicon">{notifications} Notifications</span>
            </NavLink>
            <NavLink to="/messages" activeClassName="selected">
              <span className="spanicon">{messages} Messages</span>
            </NavLink>
            <NavLink to="/bookmarks" activeClassName="selected">
              <span className="spanicon">{bookmarks} Bookmarks</span>
            </NavLink>
            <NavLink to="/lists" activeClassName="selected">
              <span className="spanicon">{lists} Lists</span>
            </NavLink>
            <NavLink to="/profile" activeClassName="selected">
              <span className="spanicon">{profile} Profile</span>
            </NavLink>
            <button className="more">
              <span className="spanicon">{more} More</span>
            </button>
          </nav>

          <button className="tweet">Tweet</button>

        </div>
        <footer>
          <button className="account" data-bs-toggle="collapse" data-bs-target="#collapseExample">
            <div className="photo">
              <img
                alt="img"
                src="../"
              />
            </div>
            <div className="acountdetails">
              <div className="name">Engy Mo</div>
              <div className="username">@engy5821</div>
            </div>
            <span>  <i className="bi bi-three-dots"></i></span>
          </button>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Add an existing account
              <hr/>
              <div>
                Log out @Engy5821
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}


export default LeftSidebar;
