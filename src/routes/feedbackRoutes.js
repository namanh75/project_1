const express = require('express')
const router = express.Router()
const feedbackController= require("../app/controllers/feedbackController")

//index: select service or system or admin page
router.get("/", feedbackController.index)

router.post("/", feedbackController.addfeedback)

module.exports = router