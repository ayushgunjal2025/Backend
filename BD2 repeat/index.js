const express = require('express');
const app = express();

require('dotenv').config();
PORT=process.env.PORT || 4000;

app.use(express.json());

const todoRoutes=require('./routes/todo');
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

const dbConnect = require('./config/database');
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>welcome to to do app</h1>`);
})