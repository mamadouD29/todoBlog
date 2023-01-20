// express.Rputer
const express = require("express")
const User = require("../models/User")
const {
    getNew,
    postNew
} = require("../controllers/newPostController")
const bcrypt = require("bcrypt")
const {
    getRegister,
    postRegister
} = require("../controllers/registerController")

const {
    getLogin,
    postLogin
} = require("../controllers/loginController")


const {
    authMiddleware
} = require("../middleware/authMiddleware")

const {
    logout
} = require("../controllers/navController")

const {
    getNotes,
    deleteNote
} = require("../controllers/notesController")


const router = express.Router();

router.get("/", (req, res) => {
    res.render("note/index");
})


router.get("/index", (req, res) => {
    res.render("note/index", {
        users: User
    })
})

router.get("/new", authMiddleware, getNew)
router.post("/new", authMiddleware, postNew)

router.get("/login", getLogin)
router.post("/login", postLogin)

router.get("/logout", logout)


router.get("/register", getRegister)
router.post("/register", postRegister)






router.get("/notes", authMiddleware, getNotes)
router.delete("/notes/:id", authMiddleware, deleteNote)

module.exports = router;