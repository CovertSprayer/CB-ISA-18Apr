
let kalMilunga = false;

function kalMilungaYaNahi(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(kalMilunga) resolve();
            else reject(new Error);
        }, 3000);
    })
}

kalMilungaYaNahi().then(()=>{
    console.log("Hum Milgye");
})
.catch((err)=>{
    console.log(err);
})

