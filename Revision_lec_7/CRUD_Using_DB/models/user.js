const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    contact: Number,
    address: String,
    gender: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;