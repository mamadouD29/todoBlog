const User = require("../models/User")

const authMiddleware = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            return res.redirect("/")
            
        }
        next()
    })
}



module.exports = {
    authMiddleware
}