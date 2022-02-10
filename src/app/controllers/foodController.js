const food = require('../models/foodModel')
const user = require('../models/userModel')
const review = require('../models/reviewModel')
const jwt = require('jsonwebtoken')

class foodController {

    // info of user
    info(req, res, next) {
        food.findOne({ name: req.params.name })
            .then(foods => {
                foods = foods ? foods.toObject() : foods
                review.find({ nameFood: req.params.name })
                    .then(reviews => {
                        reviews = reviews.map(review => review.toObject())
                        res.render('foodAndTitle/food', {
                            foods: foods,
                            reviews: reviews,
                        })

                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(next)
    }
    index(req, res, next) {
        if (JSON.stringify(req.query) === '{}') {
            food.find({})
                .then(foods => {
                    foods = foods.map(food => food.toObject())
                    res.render('foodAndTitle/listFood', {
                        foods: foods
                    })
                })
                .catch(next)
        }
        else {
            food.find({ descriptionTitle: req.query.title })
                .then(foods => {
                    foods = foods.map(food => food.toObject())
                    res.render('foodAndTitle/listFood', {
                        foods: foods
                    })
                })
                .catch(next)
        }
    }

    addreview(req, res, next) {
        if (req.cookies.token) {

            jwt.verify(req.cookies.token, "nam12345", function (err, datatoken) {
                if (err) {
                    console.log(err)
                    res.render('registerAndLogin/login', {
                        layout: false,
                    })
                }
                else {
                    var formData = req.body
                    user.findOne({ account: datatoken.account })
                        .then(userdata => {
                            console.log(userdata.name)
                            formData.username = userdata.name
                            formData.nameFood = req.params.name
                            var reviews = new review(formData)
                            reviews.save()
                                .then(data => {
                                    var url = '/food/' + req.params.name
                                    res.redirect(url)
                                })
                                .catch( err => {
                                    console.log(err)
                                })

                        })
                        .catch(err => {
                            console.log(err)
                        })

                }
            })
        }
        else {
            res.redirect('/login')
        }
    }
}

module.exports = new foodController