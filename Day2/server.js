let http = require("http")

let server = http.createServer((req, resp) => {

    if (req.url === "/") {

        resp.end("Welcome to Node.Js")
    }
    if (req.url === "/content") {
        const obj = {
            status: 1,
            data: [{
                name: "John",
                age: 25,
                place: "Mumbai"
            }, {
                name: "Doe",
                age: 30,
                place: "Delhi"
            },
            {
                name: "Sushrut",
                age: 23,
                place: "Nagpur"
            }]
        }
        resp.end(JSON.stringify(obj))
    }
    if (req.url === "/about") {
        resp.end("This is About Section")
    }



})

server.listen("2000") //Server is listening on port 2000 http://localhost:2000