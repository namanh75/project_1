const feedback=require('../models/feedbackModel')
const jwt=require('jsonwebtoken')

class feedbackController{

    //select: content or system
    index(req, res, next){
        res.render('feedback/feedback')
    }

    addfeedback(req, res, next){
        if(req.cookies.token){
            jwt.verify(req.cookies.token, "nam12345", function(err, data){
                if(err){
                    res.send('xác thực thất bại')
                }
                else{
                    console.log(req.body)
                    res.redirect('/feedback')
                }
            })
        }
        else{
            res.redirect('/login')
        }
    }
    
}

module.exports = new feedbackController