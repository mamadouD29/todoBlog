const mongoose = require("mongoose")
const Notes = require("../models/NotesPost")

const getNew = (req, res) => {
    res.render("note/new.ejs")
}


const postNew = async (req, res) => {


    await Notes.create({
            title: req.body.title,
            snippet: req.body.snippet,
            body: req.body.body,
            userid: req.session.userId
        })
        .then(result =>{ 
            console.log("userid: ", Notes.userid);
            res.redirect("/notes"),{notes: result}})
        .catch(err => console.log(err))


    // const notes = new Notes({...req.body, userid: req.session.userid});
    // console.log(notes);
    // await notes.save()
    // .catch(err => console.log("There is an error : \n\n", err))
    // res.redirect("notes")

}

module.exports = {
    getNew,
    postNew
}