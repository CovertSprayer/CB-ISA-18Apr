
let watchingMovies = true;

// function delay(){
//     let currentTime = new Date().getTime();

//     while(currentTime + 2000 > new Date().getTime()){

//     }

// }


let p = new Promise(function(resolve, reject){

    // delay();
    setTimeout(() => {
        if(!watchingMovies) return reject('No popcorn!!');

        resolve('Yaay! popcorns');
    }, 2000);
   
})


p.then(
    function(msg){
        console.log('Success:', msg);
    }
)
.catch(
    function(err){
        console.log('Failure:', err);
    }
)
