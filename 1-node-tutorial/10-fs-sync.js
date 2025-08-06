// // fs - file system

// const {readFileSync, writeFileSync} = require('fs')

// // just to read the mentioned files
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')


// // to create a file or folder . look at the left hand side after running this
// // path: 'a' repeats the existing code within the files twice
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })


// if you need the path. I just tried it
// const path = require('path')
// console.log(path.resolve('./content/result-async.txt'));






// fs - file system

const {readFileSync, writeFileSync} = require('fs')
console.log('start')

// just to read the mentioned files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


// to create a file or folder . look at the left hand side after running this
// path: 'a' repeats the existing code within the files twice
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })
console.log("done with the task")
console.log("starting the next task")


// output 

// start
// done with the task
// starting the next task