const express = require('express');
const router = express.Router();
const horoscopeController = require('./controllers/horoscopeController');
const userController = require('./controllers/userController');

// -----INDEX ROUTES ----- //
//Index page get req:
router.get('/', (req, res) => {
    res.render('Index', {
        title: 'Home',
        message: 'Welcome to the Home Page!',
        user: req.session.user  // Pass user data to the view
    });
});


// -----SIGN UP ROUTES ----- //
// Sign Up page GET
router.get('/signup', (req, res) => {
    // Redirect if already logged in
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('signUp', {
            title: 'Create an Account'
        });
    }
});

// Sign Up page POST
router.post('/signup', userController.signup);


// -----LOGIN ROUTES ----- //
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
    res.render('Horoscope', {
        title: 'Enter Your Birthdate',
        user: req.session.user  // Pass user data to the view
    });
});

//Horoscope POST
router.post('/horoscope', horoscopeController.getHoroscope);

module.exports = router;