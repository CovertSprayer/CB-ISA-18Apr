const fs = require('fs');
const path = require('path');


function getData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname, 'data', fileName);
        fs.readFile(loc, {encoding:'utf-8'}, (err, data)=>{
            if(err) {
                console.log(err);
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

// getData('file1.txt')
//     .then((data)=>{
//         // console.log(data);
//         let arr1 = data.split('\r\n');
//         // console.log(arr1);

//         getData('file2.txt')
//             .then((data)=>{
//                 let arr2 = data.split('\r\n');
//                 let arr = [...arr1, ...arr2];
//                 // console.log(arr);

//                 arr.sort((a,b)=> a-b);
//                 // let sortedArr = JSON.stringify(arr);
//                 // console.log(sortedArr);

//                 let finalPath = path.join(__dirname, 'data', 'output.txt');

//                 fs.writeFile(finalPath, arr.toString(), (err)=>{
//                     if(err) console.log(err);
//                     else console.log('File Written Successfully!!');
//                 })

//             })
//     })


async function createOutput(){
    const data1 = await getData('file1.txt');
    const data2 = await getData('file2.txt');

    // console.log(data1, data2);
    let arr1 = data1.split('\r\n');
    let arr2 = data2.split('\r\n');

    let arr = [...arr1, ...arr2];
    arr.sort((a,b)=>a-b);

    let finalPath = path.join(__dirname, 'data', 'output2.txt');

    fs.writeFile(finalPath, arr.toString(), (err)=>{
        if(err) console.log(err);
        else{
            console.log('file written successfully!!');
        }
    })

}


createOutput();

