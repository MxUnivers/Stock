  

const express =  require('express');
const app =  express();
const mongoose =  require('mongoose');
const dotenv =  require('dotenv');
const helmet =  require('helmet');
const morgan =  require('morgan');
const cors  =  require('cors');
const  bodyParser  =  require('body-parser');

// defines routes 
const auth = require('./routes/auth');
const  user =  require('./routes/users.js');
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser :  true }, (error)=> {
    console.log("Connected successfully to server");
});


//Middleware
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
// header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
});


app.use('/api/auth' , auth ); 
app.use('/api/user' , user );
app.get("/" ,  async(req , res)=>{
    res.send("salut tout le monde");
})
app.listen(process.env.PORT ,()=>{
    console.log('web api started .....');
});


//chercher dans le dossier un fichier nommé