const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{
        console.log('Database Connected!!')
    })
    .catch((err)=>{
        console.log(err);
    })


// const movieSchema = new mongoose.Schema({
//     name:String,
//     year:Number,
//     rating:Number,
//     isWatched:Boolean
// })

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        min:1990,
        max:2023
    },
    rating:{
        type:Number,
        min:0,
        max:10
    },
    isWatched:{
        type:Boolean,
        default:false
    }
});


const Movie = mongoose.model('Movie', movieSchema);

const ironman = new Movie({name:'Ironman', year:2008, rating:8.8, isWatched:true});

console.log(ironman);

ironman.save()
    .then((m)=>{
        console.log(m);
        console.log('Saved Successfully!!');
    })
    .catch(err=>console.log(err));