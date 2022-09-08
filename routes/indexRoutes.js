//dependencies
const router = require('express').Router();
const path = require ('path');


//routes to notes/db.json/main page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.export = router;