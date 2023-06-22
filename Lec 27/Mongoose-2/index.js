const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{
        console.log('Database Connected!!')
    })
    .catch((err)=>{
        console.log(err);
    })



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
    
const dummyMovies = [
    {
        name:'Super Man',
        year: 2012,
        rating: 7.2,
        isWatched: false
    },

    {
        name:'StarWars',
        year: 2015,
        rating: 6.8,
        isWatched: true
    },

    {
        name:'Croods',
        year: 2010,
        rating: 8.7,
        isWatched: true
    },

    {
        name:'Mission Impossible',
        year: 2019,
        rating: 9,
        isWatched: false
    },

    {
        name:'Ek tha Tiger 4',
        year: 2023,
        rating: 3.5,
        isWatched: true
    },

    {
        name:'Fight Club',
        year: 1994,
        rating: 8.8,
        isWatched: true
    }

];

Movie.deleteMany({})
    .then(()=>console.log('Deleted Every Document!'));

Movie.insertMany(dummyMovies)
    .then((movies)=>{
        // console.log(movies);
        console.log('Dummy items inserted successfully!');
    })
    .catch(err => console.log(err));


// Movie.create({name:'COD', year:'2004', rating:7.5, isWatched:false})
//     .then((m)=>{console.log(m)});


// Movie.find({})
//     .then(m => console.log(m));

// Movie.find({name:'Croods'})
//     .then(m => console.log(m));


// Movie.find({year:{$gt:2010}})
//     .then(m => console.log(m));

// Movie.find({year:{$nin:[2010,2012,2023]}})
//     .then(m => console.log(m));

// Movie.find({$and:[{year:{$gte:2010}}, {rating:{$gt:8}}]})
//     .then(m => console.log(m));


// Movie.findById('64946191a008565b3777c543')
//     .then(m => console.log(m));


// Movie.updateOne({name:'StarWars'}, {year:2000})
//     .then(m=>console.log(m));

// Movie.updateMany({rating:{$gt:8}}, {isWatched:true})
//     .then(m=>console.log(m));

// Movie.deleteOne({name:'Super Man'})
//     .then(m=>console.log(m));

// Movie.deleteMany({isWatched:true})
//     .then(m=>console.log(m));

