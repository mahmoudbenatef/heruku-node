const express = require("express")
const Router = express.Router()
var userHandlers = require('../controllers/userController.js');

console.log("here")
Router.post("/register"
    ,(req,res)=>{
        console.log("abdnn")
   userHandlers.register(req,res)
})

Router.get("/"
    ,(req,res)=>{
        userHandlers.users(req,res)
    })

    Router.post("/search"
    ,(req,res)=>{
        userHandlers.search(req,res)
    })

Router.patch("/:id",(req,res)=>{
    userHandlers.edit(req,res)
})


Router.delete("/:id",(request,response)=>{
    userHandlers.delete(request,response)
})

module.exports = Router