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

// Get edit profile page
exports.getEditProfile = async (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }

    try {
        const user = await User.findById(req.session.user.id);
        if (!user) {
            res.status(404).send('User not found');
            return;
        }
        res.render('EditProfile', { title: 'Edit Profile', user: user });
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).send('Failed to get user data');
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    const { username, email, password, dob } = req.body;
    try {
        const userId = req.session.user.id;
        const updates = { username, email, dob };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updates.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        console.log("Updated user:", updatedUser);
        req.session.user = { id: updatedUser._id, username: updatedUser.username, dob: updatedUser.dob };
        
        // Redirect to the home page after successful update
        res.redirect('/');

    } catch (error) {
        console.error('Failed to update user profile:', error);
        res.status(500).send({ message: 'Failed to update profile', error: error.message });
    }
};