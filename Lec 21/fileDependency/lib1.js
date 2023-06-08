const lib2 = require('./lib2');

console.log('Inside Lib 1');

function one() {
    console.log('running Function One');
}

module.exports.one = one;
module.exports.lib2 = lib2;

// module.exports = {
//     one,
//     lib2
// }