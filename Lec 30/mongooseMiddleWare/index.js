const User = require('./userModel');

const newUser = new User({
    username: 'AkshayPalve',
    password: 'secretkey'
});

newUser.save()
    .then(user => {
        console.log('User Created', user);
    })
    .catch(e => {
        console.log('Error: ', e);
    })