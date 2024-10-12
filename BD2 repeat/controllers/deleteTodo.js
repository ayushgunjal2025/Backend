const Todo = require('../models/Todo');

exports.deleteTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete({_id:id});
        
        res.status(201).json({
            success:true,
            message:"Todo deleted successfully"
        });

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}