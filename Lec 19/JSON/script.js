const product = [
    {
        id:1,
        name:'iphone',
        price:100,
        description:'this is random text'
    },
    {
        id:2,
        name:'TV',
        price:200,
        description:'this is random text'
    },
    {
        id:3,
        name:'Laptop',
        price:150,
        description:'this is random text'
    },

    {
        fun: function hacked(){
            console.log('You are hacked!!')
        }
    }

];

// console.log(product);

const stringProduct = JSON.stringify(product);
// console.log(stringProduct);

const parseProduct = JSON.parse(stringProduct);
// console.log(parseProduct);
console.log(parseProduct[0].price);
// stringProduct[0].price;
