const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = new Schema({
    account: {type: String, unique: true},
    password: String,
    age: String,
    email: String,
    gender: String,
    name: String,
    origin: String,
},{
    timestamps:true,
})

module.exports = mongoose.model('users', users);
