const TaskList = require("../models/task");

module.exports.home = function (req, res) {
  // fetching the data from db
  TaskList.find({}, (err, task) => {
    if (err) {
      console.log("Error in fetching list data from db");
      return;
    }
    // if data found
    return res.render("home", {
      title: "TODO App",
      todo_list: task,
    });
  });
};

// controller for adding task
module.exports.add = function (req, res) {
  TaskList.create(req.body, function (err, task) {
    if (err) {
      console.log("error in creating the list");
      return;
    }
    console.log(task);
    return res.redirect("/");
  });
};
 
// controller for deleting task
module.exports.delete = function (req, res) {
  //getting the id of selected boxes
  let id = req.query;
  console.log(id);

  //gives the length of the selected checkboxes
  let checkboxes = Object.keys(id).length;

  //iterating over each selected boxes
  for (let i = 0; i < checkboxes; i++) {
    // find the item in the database using id and delte it
    TaskList.findByIdAndDelete(Object.keys(id)[i], function (err) {
      if (err) {
        console.log("error in deleteing the item");
        return;
      }
    });
  }
  return res.redirect("back");
};
