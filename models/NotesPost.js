const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: String,

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})


const Notes = mongoose.model("Notes", NoteSchema);

module.exports = Notes;