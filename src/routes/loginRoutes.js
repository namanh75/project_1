const express = require('express')
const router = express.Router()
const loginController= require("../app/controllers/loginController")
const logoutController = require("../app/controllers/logoutController")

//login post
router.get('/', loginController.login)

//log out
router.get('/logout', logoutController.logout)

//login post
router.post('/', loginController.loginPost)

module.exports = router