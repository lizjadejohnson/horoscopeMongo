const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    dob: { type: Date, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;