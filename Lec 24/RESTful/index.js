const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

let comments = [
    {
        id: uuidv4(),
        username: 'shreyance',
        text: 'Nice Product.'
    },

    {
        id: uuidv4(),
        username: 'yogesh',
        text: 'Good Product'
    },

    {
        id: uuidv4(),
        username: 'radhakrishan',
        text: "Don't buy this product"
    }
]


app.get('/', (req,res)=>{
    res.send('Working Fine!!');
})

app.get('/comments', (req,res)=>{

    res.render('index' ,{comments});
})

app.get('/comments/new', (req,res)=>{

    res.render('new');
})

app.post('/comments', (req, res)=>{

    const {username , text} = req.body;
    comments.push({id:uuidv4(), username, text});
    res.redirect('/comments')
    // res.send('POST Req Successfull');
})

app.get('/comments/:commentId',(req,res)=>{

    const {commentId} = req.params;
    const foundComment = comments.find((comment) => comment.id === commentId);
    res.render('show', {comment:foundComment});
    // res.send("theek chalra h")
})

app.get('/comments/:commentId/edit', (req,res)=>{

    const {commentId} = req.params;
    const foundComment = comments.find((comment) => comment.id === commentId);
    res.render('edit', {comment:foundComment});
    // res.send('Sucessfull');
})

app.patch('/comments/:commentId' , (req,res)=>{

    const {commentId} = req.params;
    const foundComment = comments.find((comment) => comment.id === commentId);
    const {text} = req.body;
    foundComment.text = text;

    res.redirect('/comments');
    // res.send('PATCH Req Successfull')
})

app.listen(5000, ()=>{
    console.log('Server is Up at PORT', 5000);
})