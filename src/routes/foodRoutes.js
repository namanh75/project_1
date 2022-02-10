const express = require('express')
const router = express.Router()
const foodController= require("../app/controllers/foodController")

router.get('/:name', foodController.info)
router.post('/:name', foodController.addreview)
router.get('/', foodController.index)

module.exports = router