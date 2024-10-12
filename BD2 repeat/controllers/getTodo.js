const Todo = require('../models/Todo');

exports.getTodos = async(req,res)=>{
    try{

        const todo = await Todo.find({});
        res.status(201).json({
            success:true,
            data:todo,
            message:"Todos fetched successfully"
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Todos not fetched"
        })
    }
}


exports.getTodoById = async(req,res)=>{
    try{
        const id= req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        res.status(201).json({
            success:true,
            data:todo,
            message:"Todos fetched successfully"
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Todos not fetched"
        })
    }
}