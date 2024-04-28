const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const { username, email, password, dob } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send('Username or email already exists');
        }
        const newUser = new User({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password,
            dob
        });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('An error occurred during signup');
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username.toLowerCase() });
        if (!user) {
            return res.status(400).send('Invalid username or password');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid username or password');
        }
        req.session.user = { id: user._id, username: user.username, dob: user.dob };
        res.redirect('/');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('An error occurred during login');
    }
};
