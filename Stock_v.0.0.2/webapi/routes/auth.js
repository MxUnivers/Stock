const router =  require('express').Router(); 
const User =  require('../models/User')

router.get('/registrer' ,  (req ,  res) =>{
    const user  =  new User({username : '' ,
      email : 'aymar@gmail.com' ,
      password:'12345'});
      await 
})

module.exports = router ; 