
const mongoose =  require('mongoose'); 
const jwt =  require("jsonwebtoken"); 
const bcrypt =  require("bcryptjs"); 
const  dotenv =  require("dotenv")
dotenv.config();


const UserShema =  new mongoose.Schema({
    firstname : {
        type:String , 
        required : true,       
       
    },
    lastname:{
        type:String , 
        required : true
    },
    code:{
        type:String , 
        trim : true 
    },
    telephone : {
        type:String,
        trim : true

    },
    email : {
        type:String , 
        required : 
        true,
        unique : true
    },
    password : {
        type:String, 
        required :true,
        min:4
    },
    profilePicture : {
         type:String ,
         default:'',

    },
    isAdmin : {
        type: Boolean , 
        default:false,
    },
    tokens:[{
        token:{
            type:String , 
            default:""
        },
        status:{
            type:String , 
            enum : {values :['active' , 'trashed'] },
            default:""
        }

    }] ,
    token : {
        type:String ,
        default:""
    },
    status : {
        type :String,
        enum : {values :['active' ,  'trashed']}
    }
    
},{timestamp : true} );

// generate Auth toke
UserShema.methods.generateAuthToken =  async function()  {
    const user = this;
    const token =  jwt.sign({ id: user._id.toString() }, process.env.TWT_SCRIPT);
    user.tokens =  user.tokens.concat({token ,  status:'active'});
    await user.save();
}// 
UserShema.pre('save' ,  async function(next){
    const user  =  this;
    if(user.isModified("password")){
        user.password =  await bcrypt.hash(user.password , 8);
    }
    next();
})

UserShema.virtual("virtuelVar").get(
    ()=>{
        return this.firstname + " "
    }
);

const User =  mongoose.model('user',  UserShema);

module.exports =  mongoose.model('User' , UserShema);
