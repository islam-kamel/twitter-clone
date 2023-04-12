import * as React from "react";
import {google} from "../../constants/icons";

/** @param {function({btnStyle: string, classes: string, object, other: MouseEventHandler}): React.ReactElement} */
/**  @return {React.ReactElement} */
export default function TwButton(props) {
  return (
    <button
      {...props.other}
      className={`btn btn-${props.btnStyle ?? "primary"} ${props.classes ?? ""}`}
    >
      {props.children}
    </button>
  );
}

export function GoogleButton(props) {

  function openWindow() {
    const config = {
      client_id: "903796776003-hvlec3ebn0pbc8hmt4ao97g0cbhe9hl8.apps.googleusercontent.com",
      response_type: "code",
      scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
      redirect_uri: "http://localhost:3008/google/callback"
    }
    const url = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(config).toString()}`
    return window.open(url, "_self")
  }

  return (
    <>
      <TwButton other={{onClick: () => openWindow()}} targetId={"signWithGoogle"} {...props}>
        <i className={"mx-2"}>{google}</i>
        Sign in with Google
      </TwButton>
    </>
  );
}

export function GithubButton(props) {

  function openWindow() {
    const config = {
      client_id: "b4b597ac187ffebdfef2",
      scope: "user",
      redirect_uri: "http://localhost:3008/github/callback"
    }
    const url = `https://github.com/login/oauth/authorize?${new URLSearchParams(config).toString()}`
    return window.open(url, "_self")
  }

  return (
    <>
      <TwButton other={{onClick: () => openWindow()}} {...props}>
        <i className="bi bi-github mx-2 "></i>
        Sign in with Github
      </TwButton>
    </>
  );
}
