const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true

    }

})



const User = mongoose.model("User", UserSchema);


module.exports = User;