// dependencies
const router = require('express').Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require('path');

//To have notes read db.json file and and return saved notes as JSON
router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

//Post to save note on body, add it to db.json file, and creats a unique id for each note 
router.post("/api/notes", (req,res) => {

    // let note = JSON.parse(fs.readFileSync("../db/db.json"));
    let note = fs.readFileSync('db/db.json');
    note = JSON.parse(note);
    res.json(note);
    let noteAdded = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    note.push(noteAdded);
    fs.writeFileSync("../db/db.json", JSON.stringify(note));
    res.json(note);

});

//bonus delete option

module.exports = router;



