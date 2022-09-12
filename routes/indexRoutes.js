//dependencies
// const path = require ('path');
// const router = require('express').Router();
const express = require('express');

// Import our modular router
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/api', apiRouter);



//routes to notes/db.json/main page
// router.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });


// module.exports = router;
module.exports = app;
