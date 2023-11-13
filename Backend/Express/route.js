// const express = require("express");
// const User = require("../Mongoose/userSchema");
// const Todo = require("../Mongoose/todoSchema");
// const router = express.Router();

// //  create a new user
// router.post("/signup", async (req, res) => {
//   try {
//     const newUser = new User(req.body); // Assuming you send user details in the request body
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// //  to get all todos
// router.get("/todos", async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.status(200).json(todos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // ... Other routes ...

// module.exports = router;

// route.js

const express = require("express");
const User = require("../Mongoose/userSchema");
const Todo = require("../Mongoose/todoSchema");
const router = express.Router();

// Create a new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new todo
router.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ... Other routes ...

module.exports = router;
