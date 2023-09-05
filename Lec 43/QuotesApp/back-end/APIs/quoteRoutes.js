const router = require('express').Router();
const Quote = require('../models/quote');

router.get('/quotes', async (req, res) => {
    try {
        const allQuotes = await Quote.find({});
        res.status(200).json(allQuotes);
    }
    catch (e) {
        res.status(400).json({ msg: 'Something went wrong!' });
    }
})

router.post('/quotes', async (req, res) => {
    try {
        const { author, text } = req.body;

        await Quote.create({ author, text });
        res.status(201).json({
            success: true,
            msg: 'Quote created successfully!'
        })
    }
    catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
    }
});


router.get('/quotes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const quote = await Quote.findById(id);

        res.status(200).json({
            success: true,
            quote
        })
    }
    catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
    }
});


router.delete('/quotes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Quote.findByIdAndDelete(id);
        res.status(202).json({
            success: true,
            msg: 'Quote delete successfully!'
        })
    }
    catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
    }
});

router.patch('/quotes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { author, text } = req.body;

        const quote = await Quote.findById(id);

        quote.author = author;
        quote.text = text;

        await quote.save();

        res.status(200).json({
            success: true,
            msg: 'Quote updated successfully!!'
        })
    } 
    catch (error) {
        res.status(400).json({ msg: 'Something went wrong!' });
    }
})

module.exports = router;