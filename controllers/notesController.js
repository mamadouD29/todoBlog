const Notes = require("../models/NotesPost")


const getNotes = (req, res) => {
    Notes.find({
            userid: req.session.userId
        }).exec()
        .then(result => {
            res.render("../views/note/notes", {
                notes: result
            })
        })
        .catch(err => console.log(err))
}



const deleteNote =  (req, res)=>{
    const id =  req.params.id;
    
    Notes.findByIdAndDelete(id)
    .then(result => res.redirect("/notes"))
    .catch(err => console.log(err))
}

module.exports = {
    getNotes,
    deleteNote
}