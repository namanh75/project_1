const mongoose=require('mongoose');
const Schema = mongoose.Schema

const reviews = new Schema({
    username: String,
    nameFood: String,
    content: String,
},{
    timestamps: true,
})

module.exports=mongoose.model('reviews', reviews)