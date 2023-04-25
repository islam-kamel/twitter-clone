const {app} = require("../config");
const {getGoogleToken, convertToken} = require("../oauth");

module.exports = app.get("/google/callback", async (req, res) => {
    if (req.query.code) {
        await getGoogleToken(req.query.code)
            .then(async value => {
                if (value.status === 200) {
                    const {access_token: token} = value.data;
                    await convertToken(token, "google-oauth2")
                        .then(apiRes => {
                            if (apiRes.status === 200) {
                                const {access_token, refresh_token, expires_in} = apiRes.data;
                                res.cookie("access_token", access_token, {
                                    maxAge: expires_in * 1000,
                                    secure: true,
                                    sameSite: "lax"
                                })
                                res.cookie("refresh_token", refresh_token, {secure: true, sameSite: "lax"})
                            }
                        })
                }
            })
            .catch(error => console.log(error))
    }
    res.writeHead(302, {
        Location: "http://localhost:3000",
    });
    res.end()
})
