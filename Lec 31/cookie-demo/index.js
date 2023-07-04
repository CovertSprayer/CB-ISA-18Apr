const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('thisIsOurSecurityKey'));


app.get('/', (req, res)=>{
    // res.send(req.cookies);
    res.send(req.signedCookies);

});

app.get('/setcookie', (req,res)=>{

    res.cookie('mode', 'dark');
    res.cookie('username', 'shreyance');
    res.send('Cookie set successfully!!');
})

app.get('/getcookie', (req, res)=>{
    console.log(req.cookies);
    const {mode, username} = req.cookies;

    res.send(`Hello ${username}, your prefered mode is ${mode} mode.`);
})

app.get('/setSignedCookie', (req, res)=>{

    res.cookie('fruit', 'mango', {signed:true});
    res.send('Signed Cookie set successfully!!');
})



app.listen(5000, (req,res)=>{
    console.log('Server is up at PORT', 5000);
})