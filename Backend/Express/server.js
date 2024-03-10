

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors"); // Add this line
const apiRoutes = require("./route");
const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todoapp");
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Todo App!");
});

app.use("/api", apiRoutes); // Mount API routes under /api

//future development
// Serve the static build files from the 'frontend/build' directory
// app.use(express.static(path.join(__dirname, "frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.   localhost:${PORT} `);
});
