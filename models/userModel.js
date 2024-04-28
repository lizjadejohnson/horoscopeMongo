const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true }
});

// Hash password before saving if it's modified
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);  // Generating a salt
        this.password = await bcrypt.hash(this.password, salt);  // Hashing the password with the salt
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
