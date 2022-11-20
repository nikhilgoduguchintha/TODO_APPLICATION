// requiring the mongoose module to store data in db
const mongoose = require("mongoose");

// defining schema of the db
const listSchema = new mongoose.Schema({
  // decription of task
  desc: {
    type: String,
    required: true,
  },
  //   category of task
  cat: {
    type: String,
    required: true,
  },
  //   date on which task is added
  date: {
    type: String,
    required: true,
  },
  //   priority of the task added
  p: {
    type: String,
    required: true,
  },
});
// exporting the model
module.exports = mongoose.model("TaskList", listSchema);
