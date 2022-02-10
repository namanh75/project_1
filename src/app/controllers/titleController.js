const title=require('../models/titleModel')

class siteController{
    
    // select title
    title(req, res, next){
        title.find({})
        .then(titles => {
            titles=titles.map(title =>title.toObject())
            res.render('foodAndTitle/title',{
                titles:titles
            })
        })
        .catch(next)
    }

    //food in this title select
    infoTitle(req, res, next){
        res.render('foodAndTitle/food')
    }
    
}

module.exports = new siteController