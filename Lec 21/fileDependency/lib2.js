const lib1 = require('./lib1');

console.log('Inside Lib 2');

function two() {
    console.log('running Function two');
}

module.exports.two = two;
module.exports.lib1 = lib1;

// module.exports = {
//     two,
//     lib1
// }

