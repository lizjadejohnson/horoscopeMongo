const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


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
    // Log the successful login:
    console.log(`Login successful for user: ${username}`);

    // Set up session for the user
    req.session.user = user;
    res.redirect('/'); // Redirect to main page after successful logup
    console.log(`Login session started for user: ${username}`);
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
    res.redirect('/'); // Redirect to main page after successful signup
};
