const express = require("express")

const app = express()

app.use(express.json())

let myToken = "123456"

let checkToken = (req, resp, next) => {
   console.log(req.query.token)
    if(req.query.token== "" || req.query.token == undefined){
        resp.send({
            status: 0,
            msg: "Please provide token"
        })
    }
    if(req.query.token != myToken){
        resp.send({
            status: 0,
            msg: "Please provide correct token"
        })
    }
    next()
}
app.use(checkToken)

app.get("/",(req, resp) =>{
    resp.send({
        status : 1,
    msg: "this is home section"    })
})
app.get("/about",(req, resp) => {
    resp.send({
        status:2,
        msg: "this is abour section"
    })
})

app.get("/about/:id" ,(req, resp) => {
    let currentid = req.params.id
    resp.send("this is about section with id : " + currentid)
})
app.get("/content",(req, resp) => {
    resp.send({
        status:3,
        msg: "this is content section"
    })
})

app.listen("1000")