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

// List all the comments
app.get('/comments', (req,res)=>{

    res.render('index' ,{comments});
})

// Get the form for new comment
app.get('/comments/new', (req,res)=>{

    res.render('new');
})

// Creating a new Comment
app.post('/comments', (req, res)=>{

    const {username , text} = req.body;
    comments.push({id:uuidv4(), username, text});
    res.redirect('/comments')
    // res.send('POST Req Successfull');
})


// Displaying a Particular comment
app.get('/comments/:commentId',(req,res)=>{

    const {commentId} = req.params;
    const foundComment = comments.find((comment) => comment.id === commentId);
    res.render('show', {comment:foundComment});
    // res.send("theek chalra h")
})


// Get the edit form prefilled with the current data
app.get('/comments/:commentId/edit', (req,res)=>{

    const {commentId} = req.params;
    const foundComment = comments.find((comment) => comment.id === commentId);
    res.render('edit', {comment:foundComment});
    // res.send('Sucessfull');
})

// Updating the comment text
app.patch('/comments/:commentId' , (req,res)=>{

    const {commentId} = req.params;
    const foundComment = comments.find((comment) => comment.id === commentId);
    const {text} = req.body;
    foundComment.text = text;

    res.redirect('/comments');
    // res.send('PATCH Req Successfull')
})

// Deleting the comment
app.delete('/comments/:commentId', (req, res)=>{
    const {commentId} = req.params;
    const newCommentArray = comments.filter((comment)=> comment.id !== commentId);
    comments = newCommentArray;

    res.redirect('/comments');
    
})

app.listen(5000, ()=>{
    console.log('Server is Up at PORT', 5000);
})