const URL = 'http://facebook.com/user/profile.jpg';

function downloadFile(path){
    return new Promise((resolve, reject) => {
        console.log('Started to download the file from path', path);
        setTimeout(()=>{
            // console.log("File Downloaded SuccessFully as", path.split('/').pop())
            resolve(path.split('/').pop());
        },3000);
    })
}

function compressFile(fileName){
    return new Promise((resolve, reject) => {
        console.log('Starting to compress the file', fileName);
        setTimeout(() => {
            // console.log('File Compressed Successfully as', fileName.replace('jpg', 'zip'));
            resolve(fileName.replace('jpg', 'zip'));
        }, 2000);
    })
}

function uploadFile(compressFileName){
    return new Promise((resolve, reject) => {
        console.log('Starting to upload the file', compressFileName);
        setTimeout(() => {
            // console.log('File uploaded successfully at path', compressFileName);
            resolve('http://facebook.cloud/'+ compressFileName);
        }, 3000);
    })
}

downloadFile(URL)
    .then(compressFile)
    .then(uploadFile)
    .catch((err)=>{
        console.log(err);
    })


// downloadFile(URL)
//     .then((fileName)=>{
//         console.log("File Downloaded SuccessFully as", fileName);
//         compressFile(fileName)
//             .then((compressFileName)=>{
//                 console.log('File Compressed Successfully as', compressFileName);
//             })
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


