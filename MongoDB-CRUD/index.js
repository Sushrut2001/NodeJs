const express = require("express");
const { dbConnection } = require("./dbConnection");

let app = express();

app.use(express.json());

app.get("/student-read", async (req, resp) => {

    let myDB = await dbConnection();
    let studentConnection = myDB.collection("students")
    let data = await studentConnection.find().toArray();
    let resobj = {
        sName: req.body.sName,
        sMail: req.body.sMail,
        data
    }
    resp.send(resobj)
})
app.post("/student-insert", async (req, resp) => {
    let myDB = await dbConnection();
let studentConnection = myDB.collection("students")

// let {sName, sMail} = req.body;
// let obj ={sName,sMail}
let obj = {
    sName: req.body.sName,
    sMail:req.body.sMail
}

let insertreps = await studentConnection.insertOne(obj);

let respobj = {
    status: 1,
    msg : "Data Insterted",
    insertreps
}
    resp.send(respobj)
})

app.listen("2000");