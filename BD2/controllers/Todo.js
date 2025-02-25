const Todo = require('../models/Todo');

exports.createTodo = async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo created successfully"
        });
    }
    catch(error){
        console.log("error occurred");
        res.status(500).json({
            success:false,
            data:"error occurred",
            message:"not created"
        })
    }
}