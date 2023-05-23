const URL = 'http://facebook.com/user/profile.jpg';

function downloadFile(path, downloaded){
    console.log('Started to download the file from path', path);
    setTimeout(()=>{
        // console.log("File Downloaded Successfully!");
        downloaded(path.split('/').pop());
    },3000);
}

function compressFile(fileName, compresed){
    console.log('Starting to compress the file', fileName);
    setTimeout(() => {
        compresed(fileName.replace('jpg', 'zip'));
    }, 2000);
}

function uploadFile(compressFileName, uploaded){
    console.log('Starting to upload the file', compressFileName);
    setTimeout(() => {
        uploaded('http://facebook.cloud/'+ compressFileName);
    }, 3000);
}


// downloadFile(URL, function(){

// });

// callback hell
downloadFile(URL, function(fileName){
    console.log("File Downloaded SuccessFully as", fileName);
    compressFile(fileName, function(compressFileName){
        console.log('File Compressed Successfully as', compressFileName);
        uploadFile(compressFileName, function(uploadedPath){
            console.log('File uploaded successfully at path', uploadedPath);
        })
    })
});

