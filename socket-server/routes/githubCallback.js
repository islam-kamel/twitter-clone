const {app} = require("../config");
const {getGithubToken, convertToken} = require("../oauth");

module.exports = app.get("/github/callback", async (req, res) => {
    if (req.query.code) {
        await getGithubToken(req.query.code)
            .then(async value => {
                if (value.status === 200) {
                    const token = value.data.access_token;
                    await convertToken(token, "github")
                        .then(apiRes => {
                            const {access_token, refresh_token, expires_in} = apiRes.data;
                            res.cookie("access_token", access_token, {
                                maxAge: expires_in * 1000,
                                secure: true,
                                sameSite: "lax"
                            })
                            res.cookie("refresh_token", refresh_token, {secure: true, sameSite: "lax"})
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
