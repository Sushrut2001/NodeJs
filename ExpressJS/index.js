const express = require("express")

const app = express()
app.use(express.json()) //this is used to parse the json data from the request body. you can not enter this line the data will not be parsed.

app.get("/", (req, resp) => {
    resp.send({
        status: 1,
        message: "Hello Word , This is my First ExpressJS API"
    })
})
app.get("/about", (req, resp) => {
    resp.send({
        status: 2,
        obj: [{
            name: "Sushrut",
            age: 23,
        },
        {
            name: "Manan",
            age: 23,
        },
        {
            name: "Shraddha",
            age: 23
        },
        {
            name: "Rasika",
            age: 23
        }]
    })
})
app.get("/content", (req, resp) => {
    resp.send({
        status: 3,
        msg: "THis is content section"
    })
})
app.post("/login", (req, res) => {
    console.log(req.body) // Log the request body instead of the entire request object. you can write console.log(req.body) to log the request body.
    res.send({
        status: 4,
        msg: "This is login form"
    })
})

app.listen("2000")