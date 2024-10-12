const Todo = require('../models/Todo');

exports.createTodo = async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response = await Todo.create({title,description});
        res.status(201).json({
            success:true,
            data:response,
            message:"Todo created successfully"
        });

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })

    }
}