const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/quotes-app-DB')
    .then(() => console.log('quotes-app-DB connected'))
    .catch((err) => console.log(err))

app.use(express.json());

const quotesRoutes = require('./APIs/quoteRoutes');

app.use(cors({origin: ['http://localhost:3000']}));
app.use(quotesRoutes);

app.get('/', (req, res) => {
    res.send('Working Fine!');
})

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log('Server is up at PORT', PORT);
})