const router =  require('express').Router(); 
const User =  require('../models/User')

const Utility =  require("../helper/utility")

router.post('/register' , async  (req ,  res) =>{
  try {
    const user  =  new User(req.body)
    user.verificationToken = Utility.randomTokenString();
    await user.save();
    
    // generate user token
    const token =  await user.generateAuthToken();

    //send email to user
    //sendn
    res.status(201).send({user ,  token})
    
    
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
    
  }
   
})

 module.exports = router ; 