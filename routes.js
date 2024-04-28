const express = require('express');
const router = express.Router();
const horoscopeController = require('./controllers/horoscopeController');
const userController = require('./controllers/userController');

// -----INDEX ROUTES ----- //
//Index page get req:
router.get('/', (req, res) => {
    res.render('Index', { title: 'Index', message: 'Welcome to the Home Page!' });
});


// -----SIGN UP ROUTES ----- //
// Sign Up page GET
router.get('/signup', (req, res) => {
    res.render('signUp', { title: 'Create an Account' });
});

// Sign Up page POST
router.post('/signup', userController.signup);


// -----LOGIN ROUTES ----- //
router.post('/login', userController.login);



// -----HOROSCOPE ROUTES ----- //
// Horoscope page GET
router.get('/horoscope', (req, res) => {
    res.render('Horoscope', { title: 'Enter Your Birthdate' });
});

//Horoscope POST
router.post('/horoscope', horoscopeController.getHoroscope);

module.exports = router;