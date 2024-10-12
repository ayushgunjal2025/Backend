const express = require('express');

// Initialize the router with parentheses
const router = express.Router(); 

// Import controller
const { createTodo } = require('../controllers/Todo');

// Define the POST route
router.post("/createTodo", createTodo);

module.exports = router;
