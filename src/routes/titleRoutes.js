const express = require('express')
const router = express.Router()
const titleController= require("../app/controllers/titleController")

//title
router.get('/', titleController.title)

module.exports = router