const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(()=>{console.log('DB connected!')})
    .catch(e => console.log(e));

const dummy_products = [
    {
        name:'Iphone 14',
        img:'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price:200,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name: 'Mackbook Pro',
        img:'https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2tib29rJTIwcHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:1000,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'Nike Shoes',
        img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price:200,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'OnePlus TWS',
        img:'https://images.unsplash.com/photo-1655560378428-7605bda51749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:80,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'Knife Set',
        img:'https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtuaWZlJTIwc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:50,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'Canon Camera',
        img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:800,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'Drone',
        img:'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price:1500,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    }
];

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(dummy_products);
    console.log('DB seeded!');
}

seedDB();

