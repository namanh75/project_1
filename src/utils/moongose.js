module.exports = {
    mutilpleMongooseToOnject: function(mongooses){
        return mongooses.map((mongoose)=>mongoose.toOject)
    },
    singleMongooseToOnject: function(moongose){
        return moongose?mongoose:mongoose.toOject
    }
}