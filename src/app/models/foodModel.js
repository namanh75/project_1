const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foods = new Schema({
    name: String,
    origin: String,
    id: String,
    description: String,
    review: String,
    idTitle: String,
    descriptionTitle: String
})

module.exports = mongoose.model('foods', foods)
