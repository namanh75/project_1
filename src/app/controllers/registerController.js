const user = require('../models/userModel')

class registerController {

    // register post
    register(req, res, next) {
        console.log(req.body)
        const users = new user(req.body)
        users.save()
        .then(() => {
            console.log('thành công')
        })
        .catch(err=>{
            console.log(err)
        })
    }

}

module.exports = new registerController