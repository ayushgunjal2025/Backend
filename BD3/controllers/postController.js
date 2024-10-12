const Post = require('../models/postModel');

exports.createPost = async(req,res)=>{
    try{

        //get all the data from the req body
        const {title,body}=req.body;
        //creating the object
        const post = new Post(
            {title,body}
        );
        //saving it in the database
        const savedPost = await post.save();

        //sending the response
        res.json({
            post:savedPost,
        })
    }
    catch(error)
    {
        return res.status(500).json({
            error:"something went wrong"
        })
    }
}

exports.getAllPosts = async(req,res)=>{
    try{
        const post = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            post,
        })
    }
    catch(error)
    {
        return res.status(500).json({
            error:"something went wrong"
        })
    }
}