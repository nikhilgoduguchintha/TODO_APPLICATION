// requiring the express
const express = require("express");

// using express middleware
const router = express.Router();

// required the homeController from directory
const homeController = require("../controllers/home_controller");

// check after running the server router is loaded or not
console.log("Router Loaded");

// to go on home page
router.get("/", homeController.home);

// for adding task
router.post("/add-task", homeController.add);

//for deleting task
router.get("/delete-task", homeController.delete);

// exporting the router to use in index js
module.exports = router;
