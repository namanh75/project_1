const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class loginController {

    //login get
    login(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, "nam12345", function (err, datatoken) {
                if (err) {
                    console.log(err)
                }
                else {
                    user.findOne({ account: datatoken.account })
                        .then(data => {
                            res.redirect('/info')
                        })
                        .catch(err => {
                            res.render('registerAndLogin/login', {
                                layout: false,
                            })
                        })
                }
            })
        }
        else {
            res.render('registerAndLogin/login', {
                layout: false,
            })
        }

    }

    //login post
    loginPost(req, res, next) {
        user.findOne({ account: req.body.account, password: req.body.password })
            .then(data => {
                var token = jwt.sign({ account: data.account }, "nam12345")
                res.cookie("token", token, {
                    maxAge: 3600 * 1000,
                    httpOnly: true
                })
                res.redirect('/')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
    
}

module.exports = new loginController