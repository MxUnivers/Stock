const router =  require('express').Router(); 
const User =  require('../models/User');
const Utility = require("../helper/utility");

// call UserAdd.js


// create user
router.post('/register' , async  (req ,  res) =>{
    try {
      const user  =  new User(req.body);
      user.save();         
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({message :  error.message});    
    }   
  })

// get user
router.post('/get-user' , async (req ,  res) =>{
    try {
     const user  =  await User.findOne(req.body);
     res.status(200).json(user);
    } catch (error) {
        res.status(501).json({message :  error});
    }
 });

//  get All users
 router.post("/get-all-users" ,  async(req ,  res )=>{
     try{
         const  user  =   await User.find({}) 
         res.status(200).json(user);
     }
     catch(error){
         res.status(501).json({error :  error.message , message : "not user"});
     }
 })


 
// update user
router.post('/update-user/:id' ,  async(req ,  res) =>{ 
    try {
     const user  =  await  User.findOneAndUpdate({id :req.params.id ,
          firstname : req.body.firstname ,  
          lastname : req.body.lastname,
          email : req.body.email
        });
     res.status(201).send({user});
    } catch (error) {
        res.status(501).json({message :  error})
    }
 }); 
// delete
router.post('/delete-user' ,  async(req ,  res) =>{
    try {
     const user  =  await  User.findOneAndDelete(req.body);
     res.status(201).send({user});
    } catch (error) {
        res.status(501).json({message :  error})
    }
 }); 
 router.delete('/delete-all' ,  async(req ,  res) =>{
    try {
     const user  =  await  User.find();
     res.status(200).send({user});
    } catch (error) {
        res.status(501).json({message :  error})
    }
 }); 
// 

module.exports = router ; 