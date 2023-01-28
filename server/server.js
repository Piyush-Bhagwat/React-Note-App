const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/noteApp";
mongoose.set("strictQuery", true);
mongoose.connect(url);

const noteSchema = mongoose.Schema({
    idx: Number,
    title: String,
    content: String,
    date: String,
    tag: String,
});

const note = mongoose.model("Notes", noteSchema);

app.get("/api/getNotes", (req, res) => {
    note.find({}, (err, note) => {
        if (err) {
            console.log(err);
        } else {
            res.json(note);
        }
    });
});

app.listen(5000, () => {
    console.log("server started @ 5000");
});
