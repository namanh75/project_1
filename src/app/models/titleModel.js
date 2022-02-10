const mongoose = require('mongoose')
const Schema = mongoose.Schema

const title = new Schema({
    title: String,
    name: String,
    description: String,
})

module.exports = mongoose.model('title', title);