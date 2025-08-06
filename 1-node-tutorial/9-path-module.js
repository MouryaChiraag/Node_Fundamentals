// to check the properties of path(here the seperator of path)
const path = require('path')
console.log(path.sep)


// to join the assigned file path
const filePath = path.join('/content', '/subfolder', 'test.txt')
console.log(filePath)


// last part of the path
const base = path.basename(filePath)
console.log(base)


// absolute path - to check the path of a variable or something
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)