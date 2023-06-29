const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationDB')
    .then(() => console.log('DB connected'));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    addresses: [
        {
            _id: false,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);


const makeuser = async () => {
    const user = new User({ name: 'Rahul', age: 25 });
    await user.save();
    console.log('User Created!!');
    console.log(user);
}

// makeuser();

async function addAddress(userId) {
    const user = await User.findById(userId);

    user.addresses.push({
        city: 'Shimla',
        state: 'Himachal Pradesh',
        country: 'India'
    });

    await user.save();
    console.log(user);
}

addAddress('649d987c20039156a58d5507');
