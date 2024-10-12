const express = require('express');
const app=express();

require('dotenv').config();
const PORT=process.env.MONGO_URL;

app.use(express.json());

const blog = require('./routes/blog');
app.use("/api/v1",blog);

app.listen(PORT,()=>{
    console.log(`server is litening at ${PORT}`);
})

const dbConnect=require('./config/database');
dbConnect();


app.get("/",(req,res)=>{
    res.send(`<h1>Hello this is Home Page</h1>`);
})