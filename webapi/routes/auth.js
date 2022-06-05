

const router =  require('express').Router(); 
const User =  require('../models/User');
const dotenv =  require('dotenv');
const Utility =  require("../helper/utility");
const  Email =  require("../helper/email");
const { error } = require('console');

dotenv.config(); 




// verified email
router.post("/verify-email" ,  async (req ,  res)=>{
  try{
    const user =  await User.findOne({verificationToken :  req.body.token});
    if(!user){
      res.status(200)
      .send({error :true ,  message:  "L'utilisateur n'existe pas "});
    }
    user.verified =  Date.now();
    user.verificationToken =  undefined ; 
    await  user.save();
    res.status(200).send({error :  false  ,  message:""})
  }
  catch(error){
    res.status(400).send(error);
  }
})


//login
router.post('/login' ,  async(req, res)=>{
  try{
     const  user = await User.findOne({email :req.body.email , password :req.body.password})  
     
     res.status(201).json({message :"connexion réussi"+user});
     console.log("Conexxion résussi"+user)
  }catch(error){
    res.status(400).json(error.message);
    console.log(error.message)
  }
})

//Get user profile
router.post("/user-profile" ,  async  (req ,  res)=>{
  try {
        const user  =  await User.findOne(req.body.email  );
        res.status(201).send({user})
  } catch (error) {
    res.status(400).send(error)    
  }""
})

//delete all user

router.post("/delete-all" , async(req ,  res)=>{
  try{ 
    const user =  await User.findOneAndDelete({email : req.body.email}) ;
    res.status(200).json({message :  "Tout les utilisateurs ont été supprimée "+ user})
  }catch(error){
    res.status(501).json({error :  error , message :  "Error dans le code de Supresssion"});
  }
})

// forget paswword
router.post("/forget-password" ,  async  (req ,  res)=>{  
  try {    
    const user  =  await User.findOne({email :  req.body.email});  
    Email.ForgetPassword(user.email , "Etape pour renitilaiser mot de passse","<div>"+"<h1 style='color:red;'>En cas de mot de passe oublié veillez suivre les instructions ci dessous . </h1></div>"+
      "<div>"+"<ul>"+"<li><h3>Etape 1 :</h3> Rendez vous sur  <a>/reset-password puis entrez votre email pour recevoir le code de renitilisation de votre mot de passe par email</a></li>"+
         "<li><h3>Etape 2 :</h3> On procedera alka vérification de votre code de renitialisation qui vous a été envoyé par email  . Puis aller sur <a>/reset-password</a> renséigner votre code de validation </li>"+
         "<li><h3>Etape 3 :</h3> Pour finir  on se rend sur <a>/new-password</a> pour renseigner votre email et votre nouveau mot de passe . Ensuite vous pourrer vous connecter sur <a>/Login</<a/> </li>"+
        "</ul>"+"</div>" );    
  } catch (error) {
    res.status(501).send({error :  "Error "})
  }
});

// Reset password 
router.post('/create-reset-code' , async(req , res )=>{
try{
    const user = await User.findOne({email: req.body.email});
    // create tkoen renit
    const  crypto =  require("crypto")
    var resetoken =  crypto.randomBytes(8).toString('hex');
    user.resetPass = resetoken;
    await user.save();
    Email.ForgetPassword(user.email ,"code renitialisation de votre mot de votre mot de passe",
      '<div>WYou are receiving this because you (or someone else) have requested the reset of the password for your account.nn' +
      'Please click on the following link, or paste this into your browser to complete the process:nn' +
      'http://localhost:8080/response-reset-password/ <h1>' + resetoken + ' </h1>nn' +
      'If you did not request this, please ignore this email and your password will remain unchanged.n</div>')
    res.status(200).json({ message: 'token de renitialisation Créer '+resetoken });
      // send token by email
    
     
}catch(error){
  res.status(501).send({error :  true , message :  "Error Seinior !!! "+error}  );
}
})

// Valider token de renitialisation 
router.post("/verify-reset-code" ,async (req , res )=>{
     try{
        const user =  await User.findOne({ email:req.body.email,
        resetPass: req.body.resetPass});
        // verifed tokn renit 
        if(req.body.resetPass != user.resetPass){
          res.status(400).json({error: true ,  message : "Reset Token invalid"});
        }
        res.status(200).json({message : user.resetPass+" Valid" });
     }catch(error){
       res.status(501).json({error :  "Errro Code req-new-password !!!!!!"+error.message});
     }
})

// new password 
router.post("/new-password/:email" , async(req , res)=>{
  try{
   const  user =  await user.findOneAndUpdate({email :  req.params.email , password : req.body.password });
   if(!user.email){
     res.status(400).json({error  ,  message :  "Email non valid "});
   }
   res.status(200).json({message :  "Mot de passe accepter . Veillez vous connecter"});
  }catch(error){
    res.status(501).send({error :  true , message : "Error code"});
  }
})

// disconect user
router.post("/disconnect" , async(req ,  res  , next )=>{
  try{
    const  user  =  await User.findOne({email :  req.body.email});
    user.tokens.status =  "trashed";
    await user.save();
    res.status(200).json({message :  "Deconnexion de "+user.email})
  }catch(error){
    res.status(501).json({error :  error ,  message : "Error dans le code"+error})
  }
});



 module.exports = router ; 