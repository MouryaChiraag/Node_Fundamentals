// // Http Module Basic
// // req - it respresents the incoming request
// // res - this is what we are sending back


// const http = require('http');

// // now the data will be displayed in the browser, not the node terminal
// const server = http.createServer((req, res) => {
    
//     res.write('Welcome to our Homepage')
//     res.end() // we need to end the request once using it
// })

// server.listen(4000)


// --------------------------------

// Http Module Basic
// req - it respresents the incoming request
// res - this is what we are sending back


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Homepage')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>OOPS!
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">Back Home</a>
        `)
})

server.listen(4000)