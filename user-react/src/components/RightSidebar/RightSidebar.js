import React from "react";
import "./RightSidebar.scss"
import Cardtrandy from "./card";
import Links from "./links";
import authGuard from "../../guards/authGuard";
import {SuggestionFollow} from "../suggestionFollow/SuggestionFollow";
import {Link} from "react-router-dom";
import FloatingMessages from "../Message/floatingMessages";
import {useTranslation} from "react-i18next";

const RightSidebar = () => {
  const [t] = useTranslation();
  return (
    <>
      <aside className="w-100 h-100">
        <div className="position-sticky top-0 z-1 search-details">
          <div className="d-flex justify-content-around">
            <input className="form-control bg-element form-control-md rounded-pill search-div" type="search"
                   placeholder={t("explore.search_twitter")} aria-label=".form-control-lg example"/>
          </div>
        </div>
        <div className="p-0 mt-3 ms-3 overflow-y-auto h-10">
          <div className="maindiv bg-element">
            <h1 style={{
              fontSize: "20px",
              fontWeight: "700",
              padding: "13px 12px",
              margin: "0"
            }}>{t("rightsidebar.what_happening")}</h1>
            <Cardtrandy trindname={t("explore.foru_placeName")} trindy={t("rightsidebar.trendy")} tweetnumber="100000k"
                        tweets={t("profile.tweets")}/>
            <Cardtrandy trindname={t("explore.foru_placeName")} trindy={t("rightsidebar.trendy")} tweetnumber="100000k"
                        tweets={t("profile.tweets")}/>
            <Cardtrandy trindname={t("explore.foru_placeName")} trindy={t("rightsidebar.trendy")} tweetnumber="100000k"
                        tweets={t("profile.tweets")}/>
            <Cardtrandy trindname={t("explore.foru_placeName")} trindy={t("rightsidebar.trendy")} tweetnumber="100000k "
                        tweets={t("profile.tweets")}/>
            <Link to="#" className="show_more">{t("rightsidebar.show_more")}</Link>
          </div>
          <div className="follow d-flex flex-column  card border-0 mt-3 bg-element">
            <h1 style={{
              fontSize: "20px",
              fontWeight: "700",
              padding: "13px 12px",
              margin: "0"
            }}>{t("explore.how_follow")}</h1>
            <SuggestionFollow/>
            <Link to="#" className="show_more">{t("rightsidebar.show_more")}</Link>
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
