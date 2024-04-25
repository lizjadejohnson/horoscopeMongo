const express = require('express');
const router = express.Router();
const horoscopeController = require('./controllers/horoscopeController');

//Index page get req:
router.get('/', (req, res) => {
    res.render('Index', { title: 'Index', message: 'Welcome to the Home Page!' });
});

// Horoscope page GET
router.get('/horoscope', (req, res) => {
    res.render('Horoscope', { title: 'Enter Your Birthdate' });
});

//Horoscope POST
router.post('/horoscope', horoscopeController.getHoroscope);

module.exports = router;