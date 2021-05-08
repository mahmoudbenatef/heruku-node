const express = require("express")
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
var userHandlers = require('./src/controllers/userController.js');
//process.env.MONGO_CONNECTION_STRING+'/blogApp' || 
mongoose.connect("mongodb://localhost:27017/angular",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (err ) console.log("falied to connect mongo")
    else
        console.log("connected successfully to mongo")
})
const userRouter = require("./src/routes/userRoute")

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.get('/',(req,res)=>{
    res.end("hello at home ")
})
//     .post(userHandlers.register);
app.listen(3000,(err)=>{
    if (err) console.log("error in connecting")
    else
        console.log("connected successfully on port 3000")
})
