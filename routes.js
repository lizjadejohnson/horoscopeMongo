const express = require('express');
const router = express.Router();
const horoscopeController = require('./controllers/horoscopeController');
const userController = require('./controllers/userController');

// -----INDEX ROUTES ----- //
//Index page get req:
router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', user: req.session.user });
});



// -----SIGN UP ROUTES ----- //
// Sign Up page GET
router.get('/signup', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('signup', { title: 'Create an Account' });
    }
});

// Sign Up page POST
router.post('/signup', userController.signup);


// -----LOGIN ROUTES ----- //
router.get('/login', (req, res) => {
    if (req.session.user) {
        res.redirect('/'); // User already logged in, redirect to home or dashboard
    } else {
        res.redirect('/'); // No separate login page, redirect back to home
    }
});

router.post('/login', userController.login);

router.get('/logout', (req, res) => {
    console.log('Logging out user:', req.session.user);  // Check which user is being logged out
    req.session.destroy((err) => {  // Properly handle the async nature of session.destroy
        if (err) {
            return console.error('Logout failed:', err);
        }
        res.redirect('/'); //Redirect to home page after logout
    });
});

// -----HOROSCOPE ROUTES ----- //
// Horoscope page GET
router.get('/horoscope', (req, res) => {
    if (req.session.user) {
        // If logged in, pass user data but no need for date input
        res.render('Horoscope', {
            title: 'Your Horoscope',
            user: req.session.user,
            showDateInput: false // Indicates not to show the date input field
        });
    } else {
        // For non-logged in users, show the date input
        res.render('Horoscope', {
            title: 'Enter Your Birthdate',
            user: null,
            showDateInput: true
        });
    }
});


//Horoscope POST
router.post('/horoscope', (req, res) => {
    if (req.session.user) {
        // Use the DOB from the session
        req.body.dob = req.session.user.dob; // Ensure this is formatted or converted as needed in your controller
    }
    horoscopeController.getHoroscope(req, res);
});

module.exports = router;