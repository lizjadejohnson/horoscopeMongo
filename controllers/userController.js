const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.loginPage = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send('Invalid username or password');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid username or password');
    }
    // Set up session for the user
    req.session.user = user;
    res.redirect('/'); // Redirect to dashboard or any other page
};

exports.signup = async (req, res) => {
    const { username, email, password, dob } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(400).send('Username or email already exists');
    }
    const user = new User({
        username,
        email,
        password,
        dob
    });
    await user.save();
    res.redirect('/'); // Redirect to login page after successful signup
};
