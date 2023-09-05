const mongoose = require('mongoose');
const Quote = require('./models/quote');

mongoose.connect('mongodb://127.0.0.1:27017/quotes-app-DB')
    .then(() => console.log('quotes-app-DB connected'))
    .catch((err) => console.log(err))


const dummyData = [
    {
        text:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author:"Marilyn Monroe"
    },
    {
        text:"A warrior doesn't fight because he hates what is in front of him, he fights because he loves what is behind him",
        author:"Yogesh Tomar"
    },
    {
        text:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"Bernard M. Baruch"
    },
    {
        text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author:"Dr. Seuss"
    },
    {
        text:"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        author:"Albert Camus"
    },
    {
        text:"If there is a god, he will have to beg for my mercy",
        author:"unknown"
    }
]

async function seedDB(){
    await Quote.deleteMany({});
    await Quote.insertMany(dummyData);
}

seedDB()
    .then(()=> console.log('DB seeded'))