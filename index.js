const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true })); // For form data
const PORT = process.env.PORT || 3000;

// Set up static file serving
app.use(express.static('public'));  // Assuming your CSS file is in a folder named 'public'


const connectToDB = require("./config/connectToDB")
//Pulls Mongoose connection into main application

// dataPop = require("./dataPop")
//Initialize data
// Ran this to populate zodiac data the first time

app.use(express.json())
//Express doesn't naturally convert our data to json

// Setting up JSX View Engine
app.set('views', __dirname + '/views'); // Directory for views
app.set('view engine', 'jsx'); // Use .jsx files
app.engine('jsx', require('express-react-views').createEngine());

const routes = require('./routes');
app.use('/', routes);

connectToDB()
//This initializes our connectToDb function
// ---------------------------------------------reQs
// ---------------------------------------------Routing

// dataPop()
// Ran this to populate zodiac data the first time

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});