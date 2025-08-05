// can also destructure directly while calling require

// const {userInfo, uptime} = require('os') 
// const user = userInfo()
// console.log(user)


// method returns the system uptime in seconds
// console.log(`The System Uptime is ${uptime()} seconds`);

// --------------------------------------------------------------
// Another Method

const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user)


// // method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)