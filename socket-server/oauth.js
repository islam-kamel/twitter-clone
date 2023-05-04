const axios = require("axios");
const qs = require("qs");


function convertToken(token, backend) {
    const client_id = "GJwDR8g74cbc0ZHmTV1Qf5BOrer5cM15JqHjcWzA";
    const client_secret = "qi3o0sesGdoOb9RgqYxryz1t3pG2gSz4Mkrdu8sGG3qM05tnt5vQyBQJNlrW6f8erQ78NwMXQVPpXadqaVbQw0kK61HJmQlkOg7g8hHkBR6hY6riwodpTj6n2VaFuniS";

    let data = qs.stringify({
        "client_id": client_id,
        "client_secret": client_secret,
        "grant_type": "convert_token",
        "backend": backend,
        "token": token,
    });

    let config = {
        method: "post",
        url: "http://127.0.0.1:8000/auth/convert-token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data
    }

    return axios.request(config)

}

function getGoogleToken(code) {
    const params = {
        code: code,
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:3008/google/callback",
        client_id: "903796776003-hvlec3ebn0pbc8hmt4ao97g0cbhe9hl8.apps.googleusercontent.com",
        client_secret: "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",
    }

    const url = `https://oauth2.googleapis.com/token?code=${params.code}&grant_type=${params.grant_type}&client_id=${params.client_id}&client_secret=${params.client_secret}&redirect_uri=${params.redirect_uri}`;
    let config = {
        method: "post",
        url: url,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    return axios.request(config);

}

function getGithubToken(code) {
    const params = {
        code: code,
        redirect_uri: "http://localhost:3008/github/callback",
        client_id: "b4b597ac187ffebdfef2",
        client_secret: "f85e083de88e21fd97eb4fff6df500df0575a86f",
        scope: 'read:user'
    }

    const url = `https://github.com/login/oauth/access_token?code=${params.code}&client_id=${params.client_id}&client_secret=${params.client_secret}&redirect_uri=${params.redirect_uri}`;
    let config = {
        method: "post",
        url: url,
        headers: {
            Accept: 'application/json'
        }
    };

    return axios.request(config);
}
module.exports = {
    getGoogleToken: getGoogleToken,
    getGithubToken,
    convertToken
}
