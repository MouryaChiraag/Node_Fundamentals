// Streams are used to read and write data sequentially
// Useful while manipulating streaming data

 // Writeable - to write data sequentially
 // Readable - To read data sequentially
 // Duplex - To read and write data sequentially
 // Transform - To modify the Data


// -------------------------------------------------------------------





const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result);
})

// this code is not printing anything
// watch video for code
