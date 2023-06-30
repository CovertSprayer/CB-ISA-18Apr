const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/testDB')
    .then(() => console.log('DB connected'));


const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.pre('save', async function () {
    const user = this;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
})

const User = mongoose.model('User', userSchema);

module.exports = User;


