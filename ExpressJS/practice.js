const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, resp) => {
    resp.send({
        status: 1,
        msg: "Hello Word"
    })
})
app.get("/about", (req, resp) => {
    resp.send({
        status: 2,
        msg: "This is about section"
    })
})

app.get("/about/:id", (req, resp) => {
    let currentId = req.params.id  // params is used to get the id from the url
    resp.send("This is about section with id : " + currentId)
})

app.post("/register", (req, resp) => {
    console.log(req.body)
    resp.send({
        status: 3,
        msg: "This is register section",
        bodyData: req.body,
        queryData: req.query,
    })
})

app.listen("3000")