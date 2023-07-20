

// downloadFile
// compressFile
// uploadFile


function downloadFile(path, cb){
    console.log('File started to download from path', path)
    setTimeout(() => {
        const fileName = path.split('/').pop();
        console.log('File downloaded successfully!!');
        cb(fileName)
    }, 2000);
}

function compressFile(fileName, cb){
    console.log(fileName, 'started to compress');
    setTimeout(() => {
        const compressedFileName = fileName.split('.')[0] + '.zip';
        console.log('successfully compressed', fileName, 'to', compressedFileName)
        cb(compressedFileName);
    }, 1000);
}

function uploadFile(compressedFileName){
    console.log('starting to upload the file', compressedFileName);
    setTimeout(() => {
        console.log('successfully uploaded the file')
    }, 3000);
}

// const fileName = downloadFile();
// const compressedFile = compressFile(fileName);
// uploadFile(compressedFile);



downloadFile('http://facebook.com/profile.jpg', function(fileName){
    compressFile(fileName, function(compressedFileName){
        uploadFile(compressedFileName);
    })
});








