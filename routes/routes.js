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


router.get("https://notaker.onrender.com/index", (req, res) => {
    res.render("note/index", {
        users: User
    })
})

router.get("https://notaker.onrender.com/new", authMiddleware, getNew)
router.post("https://notaker.onrender.com/new", authMiddleware, postNew)

router.get("https://notaker.onrender.com/login", getLogin)
router.post("https://notaker.onrender.com/login", postLogin)

router.get("https://notaker.onrender.com/logout", logout)


router.get("https://notaker.onrender.com/register", getRegister)
router.post("https://notaker.onrender.com/register", postRegister)






router.get("https://notaker.onrender.com/notes", authMiddleware, getNotes)
router.delete("https://notaker.onrender.com/notes/:id", authMiddleware, deleteNote)


router.use((req, res) => {
    res.status(404).render("note/404");
})

module.exports = router;