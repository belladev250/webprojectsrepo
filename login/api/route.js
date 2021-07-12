const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
let UserData = require('./schema/User');


// get method
router.get('/',(req,res)=>{
    res.send("login and register api works");
})

//Register user
router.post('/register',(req,res)=>{
    var register =  new UserData(req.body);
    register.save()
    .then(regSaved=>res.send(regSaved))
    .catch( err=> res.send(err))
});

// update user
router.put('/users/:id',(req,res)=>{
    updateIntoMongodb(req,res);
})

function updateIntoMongodb(req,res){
UserData.findOneAndUpdate(req.params.id,req.body,{new:false})
.then(user=>res.send(user))
.catch(err=>res.send(err))
}

//delete user by id

router.delete('/users/:id',(req,res)=>{
    UserData.findOneAndRemove(req.params.id)
    .then(user=>res.send(user))
    .catch(err=>res.send(err))
})




//Login routes

router.post('/login',(req,res)=>{
    UserData.findOne( {userName:req.body.userName})
    .then(user=>{
        console.log(user)
        if(!user) res.sendStatus(204)
        else {
            bcrypt.compare(req.body.password, user.password)
                .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
                .catch(err=>res.send(err))
        }
    
    })
})

//username validation

router.post('/userValid',(req,res)=>{
    UserData.findOne({userName:req.body.userName})
    .then(user=>user ? res.sendStatus(200):res.sendStatus(204))
    
})

//get all data

router.get('/data',(req,res)=>{
    UserData.find((err,data)=> err ? res.sendStatus(400).send("error occured"):res.json(data))
})

module.exports = router

