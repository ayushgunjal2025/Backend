const express = require('express');
const router = express.Router();

//import controllers
const {createComment} = require('../controllers/commentController');
const{createPost,getAllPosts} = require('../controllers/postController');
const {likepost,unlikePost}= require('../controllers/likeController')

//create route to mapping
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikePost);

//exports the routes
module.exports = router;