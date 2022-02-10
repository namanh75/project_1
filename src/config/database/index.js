const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/project_1');
        console.log('connect databse success!!!')
    } catch (error) {
        console.log('connect failure!!!')
    }
}

module.exports = { connect }