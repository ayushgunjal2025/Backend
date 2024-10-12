const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likepost = async(req,res)=>{
    try{
        //getting the data
        const {post,user}=req.body;
        //creating the data object
        const like = new Like(
            {post,user}
        );
        //saving the like
        const savedLike = await like.save();

        //update the post also
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true});
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

exports.unlikePost = async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deletedLike = await Like.findOneAndDelete({post:post,like:_id});
        //update the post model also
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}}, {new:true});
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