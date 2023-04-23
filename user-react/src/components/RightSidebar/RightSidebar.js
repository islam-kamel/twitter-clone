import React from "react";
import "./RightSidebar.scss"
import Cardtrandy from "./card";
import Links from "./links";
import authGuard from "../../guards/authGuard";
import {SuggestionFollow} from "../suggestionFollow/SuggestionFollow";
import {Link} from "react-router-dom";
import FloatingMessages from "../Message/floatingMessages";

const RightSidebar = () => {
  return (
    <>
      <aside className="w-100 h-100">
        <div className="position-sticky top-0 z-1 search-details">
          <div className="d-flex justify-content-around">
            <input className="form-control bg-element form-control-md rounded-pill search-div" type="search"
                   placeholder="Search Twitter" aria-label=".form-control-lg example"/>
          </div>
        </div>
        <div className="p-0 mt-3 ms-3 h-100 overflow-scroll">
          <div className="maindiv bg-element">
            <h1 style={{fontSize: "20px", fontWeight: "700", padding: "13px 12px", margin: "0"}}>What's
              happening</h1>
            <Cardtrandy trindname="Trending in Egypt" trindy="World Cup" tweetnumber="100000k tweets"/>
            <Cardtrandy trindname="Trending in Egypt" trindy="World Cup" tweetnumber="100000k tweets"/>
            <Cardtrandy trindname="Trending in Egypt" trindy="World Cup" tweetnumber="100000k tweets"/>
            <Cardtrandy trindname="Trending in Egypt" trindy="World Cup" tweetnumber="100000k tweets"/>
            <Link to="#" className="show_more">Show more</Link>
          </div>
          <div className="follow d-flex flex-column  card border-0 mt-3 bg-element">
            <h1 style={{fontSize: "20px", fontWeight: "700", padding: "13px 12px", margin: "0"}}>Who to
              follow</h1>
            <SuggestionFollow username={"mostafaAbdElHady"} fullname={"Mostafa Abd ElHady 🧑‍💻"}
                              profileImage={"https://picsum.photos/220"}/>
            <SuggestionFollow username={"ahmedKhaled"} fullname={"Ahmed Khaled 💪"}
                              profileImage={"https://picsum.photos/220"}/>
            <SuggestionFollow username={"safaAbdElNaser"} fullname={"Safa Abd ElNaser ❤️"}
                              profileImage={"https://picsum.photos/220"}/>
            <SuggestionFollow username={"engyMohamed"} fullname={"Engy Mohamed 🍂"}
                              profileImage={"https://picsum.photos/220"}/>
            <Link to="#" className="show_more">Show more</Link>
          </div>
        </div>
        <div className="ends">
          <div className="end d-flex flex-row">
            <Links url="https://twitter.com/en/tos" name="Terms of Service"/>
            <Links url="https://help.twitter.com/en/resources/accessibility" name="Privacy Policy"/>
            <Links url="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                   name="Cookie Policy"/>
          </div>
          <div className="end-1 d-flex flex-row ">
            <Links url="#" name="Accessibility"/>
            <Links url="#" name="Ads info"/>
            <Links url="#" name="More..."/>
          </div>
          <p className="copywrite">&copy; 2023 Twitter, Inc.</p>
        </div>
        <FloatingMessages/>
      </aside>
    </>
  );
}

export default authGuard(RightSidebar);
