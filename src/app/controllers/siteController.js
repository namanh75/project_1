class siteController{
    
    // home
    index(req, res, next){
        res.render('site/home')
    }

}

module.exports = new siteController