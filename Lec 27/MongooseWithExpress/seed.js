const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/myDB')
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err))

const DUMMY_PRODUCTS = [
    {
        name: 'Iphone 11',
        price: 100,
        desc: 'The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of iPhone'
    },
    {
        name: 'Macbook Air',
        price: 200,
        desc: 'The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of iPhone'
    },
    {
        name: 'Apple Watch',
        price: 150,
        desc: 'The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of iPhone'
    },
    {
        name: 'Nike Shoes',
        price: 80,
        desc: 'The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of iPhone'
    },
    {
        name: 'Jeans',
        price: 20,
        desc: 'The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth generation of iPhone'
    },
];

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(DUMMY_PRODUCTS);
    console.log('DB Seeded!');
}

seedDB();

