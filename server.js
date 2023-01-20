const express = require('express')
const routes = require("./routes/routes")
const mongoose = require("mongoose")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const methodOverride = require("method-override")


const app = express()
const port = process.env.PORT || 3000;

const dbUri = "mongodb+srv://Mamadou:Versus22@cluster0.occcwxf.mongodb.net/note"

app.set("view engine", "ejs")
// middleware 
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use(express.urlencoded({
    extended: true
}));

mongoose.set('strictQuery', true)

mongoose.connect(dbUri)
    .then(result => app.listen(port, () => console.log(`Server listening on port ${port}!`)))
    .catch(err => console.log(err))


// express-session 
app.use(session({
    secret: "chionfoungo",
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
        mongoUrl: dbUri,
        ttl: 1 * 24 * 60 * 60
    })
}))

global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
})
// route

app.use(routes);