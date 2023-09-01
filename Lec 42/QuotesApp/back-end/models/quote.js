const mongoose= require('mongoose');

const quoteSchmea = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
});

const Quote = mongoose.model('Quote', quoteSchmea);

module.exports = Quote;

