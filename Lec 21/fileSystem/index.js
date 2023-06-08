const fs = require('fs');
const path = require('path');


const str = 'this is a string'

const F1 = path.join(__dirname, 'file.txt');

// console.log(__dirname);

// fs.writeFile(F1, str, (err)=>{
//     if(err) console.log(err);
//     else{
//         console.log('file written successfully!');
//     }
// });

fs.readFile(F1, {encoding:'utf-8'}, (err, data)=>{
    if(err) console.log(err);
    else{
        // console.log(data.toString());
        console.log(data.toString());
    }
})