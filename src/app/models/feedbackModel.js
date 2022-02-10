const mongoose=require('mongoose');
const Schema = mongoose.Schema

const feedbacks = new Schema({
    name: String,
    content: String,
    title: String,
},{
    timestamps: true,
})

module.exports=mongoose.model('feedbacks', feedbacks)