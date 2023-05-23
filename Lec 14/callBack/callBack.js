
console.log('START');

function fetchData(callback){
    setTimeout(() => {
        const data = [{name: 'Iphone', price:100}, {name: 'MacBook', price:200}];
        const err = null;
        callback(data, err);
    }, 5000);
}

fetchData(function (data, err){
    if(err){
        throw new Error('Cannot fetch the data!');
    }
    console.log(data);
})


console.log('END');