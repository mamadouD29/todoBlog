const User = require("../models/User")


const logout = (req, res) => {
    // console.log("Im out", req.session.userId)
    req.session.destroy((err) => {
        // if (err) throw err;
        
        res.redirect("/login");
    })
}



module.exports = {
    logout
}