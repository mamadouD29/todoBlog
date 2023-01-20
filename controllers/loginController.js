const User = require("../models/User")
const bcrypt = require("bcrypt")

const getLogin = (req, res) => {
    res.render("../views/note/login")
}


const postLogin = (req, res) => {
    const {
        username,
        password
    } = req.body;

    console.log(`username: ${username}, password: ${password}`);
    User.findOne({
        username: username
    }, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    console.log("same pass")
                    req.session.userId = user._id
                    res.redirect("/notes")
                } else {

                    console.log("diff password: \n")
                    res.redirect("/login")
                }
            })
        } else {
            console.log("bye bye")
            res.redirect("/login")
        }
    })



    // User.findOne({
    //         username: username
    //     }).exec()
    //     .then(user => {
    //         if (user) {
    //             bcrypt.compare(password, user.password, function (err, result) {
    //                 if (result) {
    //                     console.log("finlly login !")
    //                     req.session.userId = user._id
    //                     console.log(req.session)
    //                     res.redirect("notes")
    //                 } else {
    //                     console.log(err)
    //                     res.redirect("/login")
    //                 }
    //             })
    //         } else {

    //             res.redirect("/login")
    //         }
    //     })
    //     .catch(err => console.log(err))
}

module.exports = {
    getLogin,
    postLogin
}