const router = require('express').Router();
const Quote = require('../models/quote');

router.get('/quotes', async(req, res)=>{
    try {
        const allQuotes = await Quote.find({});
        res.status(200).json(allQuotes);
    } 
    catch (e) {
        res.status(400).json({msg:'Something went wrong!'});
    }
})

module.exports = router;