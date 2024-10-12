const express=require('express');
const app=express();

require("dotenv").config();
const PORT=process.env.PORT;

app.use(express.json());

//import routes
const todoRoutes=require('./routes/todos');
//mount apis
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

//connect to database
const dbConnect=require('./config/database');
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>welcome to to do app</h1>`);
})