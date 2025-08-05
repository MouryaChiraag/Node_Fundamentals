


const http = require("http")

const server = http.createServer((req, res) => {
    console.log("request event")
    res.end("hello WOrld")
})

server.listen(4000, () => {
    console.log("Listening to Server 4000 ...")
})
