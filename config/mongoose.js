// requiring  mongoose
const mongoose = require("mongoose");

// connected to the db
mongoose.connect("mongodb://localhost/todolist_mj_db", {
  useNewUrlParser: true,
});

// acquired connection to db
const db = mongoose.connection;

//if error it will be seen on console
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

//if up and running then print the message on console
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

// exporting the module 
module.exports = db;
