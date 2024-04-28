const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid username or password');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid username or password');
        }
        
        // Store only necessary data in the session to minimize footprint
        req.session.user = {
            id: user._id,
            username: user.username
        };
        
        // Log the successful login
        console.log(`Login successful for user: ${username}`);
        console.log(`Login session started for user: ${username} with session ID: ${req.sessionID}`);

        res.redirect('/'); // Redirect to main page after successful login
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('An error occurred during login');
    }
};

exports.signup = async (req, res) => {
    const { username, email, password, dob } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send('Username or email already exists');
        }

        // Hash password before saving to database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            dob
        });

        await newUser.save();
        console.log(`New user signed up: ${username}`);
        res.redirect('/'); // Redirect to main page after successful signup
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('An error occurred during signup');
    }
};
