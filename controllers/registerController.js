const User = require("../models/User")
const bcrypt = require("bcrypt");


const getRegister = (req, res) => {
    res.render("../views/note/register")
}

const postRegister = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
        if (err) {
            res.redirect("/register")
        }

        let user = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        })
        user.save()
            .then(user => {
                res.redirect("/login")
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })

    })

}


module.exports = {
    getRegister,
    postRegister
}