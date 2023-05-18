let str = "This is a string and we are learning JS";


// let newStr = str.toUpperCase();
// let newStr = str.toLowerCase();
// let newStr = str.substring(10,16);
// let newStr = str.substring(3,7);
// let newStr = str.replace('string', 'STRING');
// let newStr = str.replace('is', 'IS');
// let newStr = str.replaceAll('is', 'IS');
// let newStr = str.startsWith('This is');
let newStr = str.endsWith('JS');



console.log(newStr);


let menu = ['Chole Bhature', 'Chicken Kabak', 'Momos', 'Shahi Paneer', 'Khichri', 'Dahi Balle', 'Egg Curry', 'Butter Chicken', 'Fish Pakode', 'Mutton Biryani', 'Afghani Chicken', 'Chicken Do Pyaaza', 'Dum aalo', 'shaahi tukda'];

function isVeg(foodItem){
    if(foodItem.toLowerCase().indexOf('chicken') !== -1 ||
       foodItem.toLowerCase().indexOf('mutton') !== -1 ||
       foodItem.toLowerCase().indexOf('egg') !== -1 ||
       foodItem.toLowerCase().indexOf('fish') !== -1){
        return false;
    }
     return true;
}


let vegMenu = menu.filter(isVeg);
let nonVegMenu = [];

console.log(vegMenu);



