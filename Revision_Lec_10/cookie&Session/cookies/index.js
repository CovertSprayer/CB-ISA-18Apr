const express = require('express');
const app = express();
const cookieParse = require('cookie-parser');
const PORT = 5000;


app.use(cookieParse('thisIsOurSecretKey'));

app.get('/', (req, res) => {
    res.send('Working Fine!');
});


// app.get('/getIphone', (req, res) => {
//     res.cookie('price', '40000');
//     res.send('Successfully purchased Iphone');
// });


// app.get('/getEarbuds', (req, res) => {
//     let earBudsPrice = 20000;
//     if (req.cookies.price > 50000) {
//         let discountPrice = earBudsPrice - 10000;
//         res.cookie('price', discountPrice);
//         res.send('successfully purchased earbuds!');
//     }
//     else {
//         res.send('you have not spent enough paisa!!');
//     }
// });


app.get('/getIphone', (req, res) => {
    res.cookie('price', '40000', {signed:true});
    res.send('Successfully purchased Iphone');
});

app.get('/getEarbuds', (req, res) => {
    let earBudsPrice = 20000;

    if(req.signedCookies.price === false){
        return res.send('You are doing fraud!!');
    }

    if (req.signedCookies.price > 50000) {
        let discountPrice = earBudsPrice - 10000;
        res.cookie('price', discountPrice);
        res.send('successfully purchased earbuds!');
    }
    else {
        res.send('you have not spent enough paisa!!');
    }
});




app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});


