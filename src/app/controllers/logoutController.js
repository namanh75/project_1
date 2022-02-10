const jwt  = require("jsonwebtoken")

class logoutController{
    logout(req, res, next){
        res.clearCookie('token').redirect('/')
    }
}

module.exports = new logoutController