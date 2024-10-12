const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.createComment = async(req,res)=>{
    try{
        //get the data from the req body
        const {post,user,body}=req.body;
        //creating new object from the data
        const comment = new Comment(
            {post,user,body}
        );
        //saving the comment to the database
        const savedComment = await comment.save();

        //updating the post also
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")
        .exec();

        res.json({
            post:updatedPost,
        })
    }

    catch(error)
    {
        return res.status(500).json({
            error:"something went wrong"
        })
    }
}