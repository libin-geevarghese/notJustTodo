const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

const formDataSchema = new mongoose.Schema({
  name: String,
  age: String,
  job: String,
  phone: String,
});
const FormData = mongoose.model("todo", formDataSchema);

function saveDb(data) {
  const formData = new FormData(data);
  formData.save();
}

module.exports = { saveDb };
