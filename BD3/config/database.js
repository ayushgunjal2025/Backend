const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{console.log("connected to database")})
    .catch((error)=>{
        console.log("something went wrong");
        console.error(error);
        process.exit(1);
    })
}

module.exports=dbConnect;