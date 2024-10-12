const express = require('express');
const router = express.Router();


//importing the controllers
const {createTodo} = require('../controllers/createTodo');
const {getTodos,getTodoById} = require('../controllers/getTodo');
const {updateTodo}=require('../controllers/updateTodo');
const {deleteTodo}=require('../controllers/deleteTodo');
//routing it with routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodos);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
//export router
module.exports = router;