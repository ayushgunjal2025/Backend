//step1 create a folder
//step2 open in vscode
//step3 npm init -y
//step4 npm i express
//step5 server.js file 

//single instance
const express=require('express');

//named it as app
const app=express();

//specifically parse json data and add it to the req.body object
const bodyParser=require('body-parser');//put and post
app.use(bodyParser.json());

// server will listen on port number 3000
app.listen(3000,()=>{
    console.log("server started at 3000 port number");
});


//jabhi hum humare iss route '/' par ayenge response main ye string milegi
app.get('/',(req,res)=>{
    res.send("hello jeee, kaise ho saare");
})

//hum khuch data post karna chahta hu tooh data hum request main hi send kar rahe hai
app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted sucessfully");
})

//postman
// now we will use postman doc,testing it is a collabration tool
//parsing nahi kiya islyee error aya req ki body ke andar ka data parse krta hai
//abb barabar submit hua using post request data

//now talking about mongoDb -nosql database
//storage available can store data in form of doc,key:value,graphs
//scalability and performance
//data is not fixed schema
//mongoDB setup -mongodb install,mongo shell cmd-interact with dbs using CRUD
//create,read,update,delete-CRUD
//mongoDB compass GUI interface using buttons perform CRUD operations
//cheatsheet of mongo and express
//create cars name database and mahindra type of collection
// create insert documents manually and insert it name="DL1CR" ,brand:"scorpio"
// read operation  using {"name":"DL1CR"} and find button
//update operation using {"name":"DL20CR"} and update button
//using delete button


//now we have express ka server we have to connect the mongodb link
//optimize way is moongoose for connection layer
//ODM library object data Modelling
//mongoose use karna hai tooh setup karna hai
//install mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbNxtWave',{
    //configuration
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected to database");
})
.catch((error)=>{
    console.log("recived an error");
})


