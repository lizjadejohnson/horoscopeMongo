require('dotenv').config();
console.log('Session Secret:', process.env.SESSION_SECRET);  // Verify it prints correctly.
console.log('DB URL:', process.env.DB_URL);  // Verify it prints correctly.

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectToDB = require('./config/connectToDB'); //Pulls Mongoose connection into main application
const app = express();

// Use body parser middleware to parse JSON and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Express doesn't naturally convert our data to json

// Set up static file serving
app.use(express.static('public'));  // Assuming your CSS file is in a folder named 'public'



// Setup session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL
    }),
    cookie: {
        // Secure cookies should only be used over HTTPS
        // secure: process.env.NODE_ENV === 'production',
        secure: false,
        httpOnly: true,  // This helps against XSS attacks
        maxAge: 1000 * 60 * 60 * 24 // Set cookie to expire in 24 hours
    }
}));


// Connect to MongoDB:
connectToDB();
//This initializes our connectToDb function


// Setting up JSX View Engine:
app.set('views', __dirname + '/views'); // Directory for views
app.set('view engine', 'jsx'); // Use .jsx files
app.engine('jsx', require('express-react-views').createEngine());

//Use Routes:
const routes = require('./routes');
app.use('/', routes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// dataPop = require("./dataPop")
//Initialize data
// Ran this to populate zodiac data the first time

// dataPop()
// Ran this to populate zodiac data the first time