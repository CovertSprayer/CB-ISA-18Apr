const checkABCD = (req, res, next) => {
    if (req.body.comment === 'abcd') {
        return res.send("You cannot comment this");
    }
    next();
}

const temp = ()=>{}

module.exports.checkABCD = checkABCD;
module.exports.temp = temp;

// module.exports = { checkABCD, temp };