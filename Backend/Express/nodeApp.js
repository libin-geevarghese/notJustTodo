const express = require("express");
const mongo = require("./mongo");
const expressApp = express();
const bodyParser = require("body-parser");
const port = 5002;
const path = require("path");
expressApp.use("/assets", express.static(path.join(__dirname, "assets")));
expressApp.use("/", express.static(__dirname));
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.post("/submit", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      age: req.body.age,
      job: req.body.job,
      phone: req.body.phone,
    };
    console.log("data parsing success");
    mongo.saveDb(data);
    res.status(201).send("Data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data to the database");
  }
});

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("rendering home pages success");
});

expressApp.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "search.html"));
  console.log("rendering search pages success");
});
expressApp.listen(port, () => {
  console.log(`app listening on ${port}...  connect to :    localhost:${port}`);
});
