const express = require('express')
const router = express.Router()
const infoController= require("../app/controllers/infoController")

//info user
router.get('/', infoController.info)

//info post
router.put('/', infoController.infoupdate)

module.exports = router