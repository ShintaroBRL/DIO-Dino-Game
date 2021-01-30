
const indexRoute = (app) => {

    app.get("/", (req, res) => {
        res.render("index.ejs")
    })

}

module.exports = indexRoute;