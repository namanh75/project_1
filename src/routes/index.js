const registerRoute = require("./registerRoutes")
const loginRoute = require("./loginRoutes")
const titleRoute = require("./titleRoutes")
const infoRoute = require("./infoRoutes")
const foodRoute = require("./foodRoutes")
const feedbackRoute = require("./feedbackRoutes")
const siteRoute = require("./siteRoutes")

function route(app){
    //register
    app.use("/register", registerRoute)

    //login
    app.use("/login", loginRoute)

    //title
    app.use("/title", titleRoute)

    //info
    app.use("/info", infoRoute)

    //feedback
    app.use("/feedback", feedbackRoute)

    //food
    app.use("/food", foodRoute)

    //home
    app.use("/", siteRoute)
}


module.exports = route