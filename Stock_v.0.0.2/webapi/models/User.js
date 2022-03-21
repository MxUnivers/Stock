const mongoose =  require('mongoose');

const UserShema =  new mongoose.Schema({
    username : {
        type:String , 
        require : true,
        min : 3 , 
        max:20,
        unique : true
    },
    email : {
        type:String , 
        require : 
        true,
        unique : true
    },
    password : {
        type:String, 
        require :true,
        min:4
    },
    profilePicture : {
         type:String ,
         default:'',

    },
    isAdmin : {
        type: Boolean , 
        default:false,
    }
},{timestamp : true} )

module.exports =  mongoose.model('User' , UserShema);