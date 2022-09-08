//dependencies
const router = require('express').Router();
const path = require ('path');

//Import router
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/apiRoutes', apiRouter);

module.export = route;