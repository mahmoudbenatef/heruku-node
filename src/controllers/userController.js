'use strict';
const UserModel = require("../models/userModel")

var mongoose = require('mongoose')

exports.register = async function(req, res) {
    const userData = req.body
    const userInstance = new UserModel({name:userData.name,email:userData.email
        // ,lastname:userData.lastname,gender:userData.gender,password:userData.password
    })
    try{
        console.log("init");
        let user = await userInstance.save()
        // user.hash_password = undefined;
        return res.json(user)
    }
    catch (err){
        return res.json(err)
    }
};

exports.users= async function (request,response,next){
    try {

        const users = await  UserModel.find({})
        return  response.json(users)
    }
    catch (err){
        return  response.json(err)
    }
}

 exports.edit= async function  (request,response){
    const userData = request.body
    let userObj = {}
    if(userData.name) userObj.name=userData.name
    // if(userData.lastname) userObj.lastname=userData.lastname
    // if(userData.dob) userObj.dob=userData.dob
    if(userData.email) userObj.email=userData.email
     try {
         console.log(request.params.id)
       const updated = await  UserModel.updateOne({_id:request.params.id},userObj)

         return response.json({msg:"update successfully",data:userData})
     }
    catch (err){
        response.json({msg:"error", data:err})
    }
}

exports.delete= async function(req,res){
try {
    const deletedUser=await UserModel.deleteOne({_id:req.params.id})
    console.log("deleted")
    return  res.json("delted success")
}
catch (err){
    return  res.json(err)
}
}
exports.search= async function(req,res){
    try {
        console.log(req.body.name);
        const users =await UserModel.find({$or: [{"name" : {$regex : `.*${req.body.name}.*`}},{"email" : {$regex : `.*${req.body.name}.*`}}]})

        console.log("deleted")
        return  res.json(users)
    }
    catch (err){
        return  res.json(err)
    }
    }
exports.show = async function(req,res){
}
// )
