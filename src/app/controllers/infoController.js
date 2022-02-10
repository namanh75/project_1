const jwt = require('jsonwebtoken')
const user = require('../models/userModel')

class infoController {

    // info of user
    info(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, "nam12345", function (err, datatoken) {
                if (err) {
                    console.log(err)
                    res.send('xác thực tài khoản thất bại')
                }
                else {
                    user.findOne({ account: datatoken.account})
                        .then(userdata => {
                            userdata = userdata ? userdata.toObject() : userdata
                            res.render('info/info', {
                                userdata: userdata
                            })
                        })
                        .catch(err => {
                            res.redirect('/login')
                        })
                }
            })
        }
        else {
            res.redirect('/login')
        }

    }


    //info post
    infoupdate(req, res, next){
        var token=req.cookies.token
        jwt.verify(token, 'nam12345', function(err, datatoken){
            if(err) {
                console.log(err)
                res.send('xác thực tài khoản thất bại')
            }
            else{
                user.findOne({account: datatoken.account})
                .then(accountdata =>{
                    user.updateOne({ account: accountdata.account },req.body)
                    .then(()=>{
                        console.log('thành công')
                    })
                    .catch(next)
                })
                .catch(err => {
                    console.log(err)
                })
                
            }
        })
        
    }

}

module.exports = new infoController