import Cookies from "js-cookie";
import axios from "axios";


class Token {
  static REFRESH_TOKEN_AGE = 365;

  calcTokenAge = (age) => new Date(new Date().getTime() + age * 60)

  setToken({refresh_token, access_token, expires_in}) {
    Cookies.set("access_token", access_token, {
      secure: true,
      sameSite: "lax",
      expires: this.calcTokenAge(expires_in)
    })

    Cookies.set("refresh_token", refresh_token, {
      secure: true,
      expires: Token.REFRESH_TOKEN_AGE,
      sameSite: "lax"
    })

  }

  getToken(cookieKey) {
    return Cookies.get(`${cookieKey}_token`)
  }

  revokeAllToken() {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
  }

  refreshToken() {
    return async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/auth/token", {
          client_id: process.env.REACT_APP_API_ID,
          client_secret: process.env.REACT_APP_API_SECRET,
          refresh_token: this.getToken("refresh"),
          grant_type: "refresh_token",
        }, {
          headers: {"Content-Type": "application/json"},
        })
        if (response.status === 200) {
          this.setToken(response?.data)
        }
        return response;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

}

export {
  Token
}

//
// export default function token() {
//   const calcTokenAge = (age) => new Date(new Date().getTime() + age * 60)
//   const REFRESH_TOKEN_AGE = 365;
//
//   const setToken = (token) => {
//     Cookies.set("access_token", token.access_token, {
//       secure: true,
//       sameSite: "lax",
//       expires: calcTokenAge(token.expires_in)
//     })
//
//     Cookies.set("refresh_token", token.refresh_token, {
//       secure: true,
//       expires: REFRESH_TOKEN_AGE,
//       sameSite: "lax"
//     })
//   }
//
//   function getToken(cookieKey) {
//     return Cookies.get(`${cookieKey}_token`)
//   }
//
//   function removeToken() {
//     Cookies.remove("access_token");
//     Cookies.remove("refresh_token");
//   }
//
//   return {setToken, getToken, removeToken};
// }
