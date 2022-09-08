// dependencies
const express = require('express');

// Route files
const apiRoutes = require('./routes/apiRoutes');
const indexRoutes = require('./routes/indexRoutes');

// Set port
const PORT = process.env.PORT || 3001;

//initialize express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', indexRoutes);

//App Listener
app.listen(PORT, () =>
  console.log(`App listening at localhost:${PORT}`)
);

