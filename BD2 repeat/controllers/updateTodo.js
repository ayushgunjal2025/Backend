const Todo = require('../models/Todo');

exports.updateTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()}
        );
        
        res.status(201).json({
            success:true,
            data:todo,
            message:"Todo updated successfully"
        });

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}