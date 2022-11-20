// required express module
const express = require("express");

// required db
const db = require("./config/mongoose");

// selecting the port to use
const port = 3010;

const app = express();

// requiring the node sass middleware
const sassMiddleware = require("node-sass-middleware"); 

// using the middleware to convert scss to css
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "extended",
    prefix: "/css",
  })
);

// using static files
app.use(express.static("./assets"));
// using express middleware to read url request
app.use(express.urlencoded());

// setting up view engine as ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// using express routes
app.use("/", require("./routes/index"));

// express app is listening on port
app.listen(port, function (err) {
  // if error in running the server
  if (err) {
    console.log("Error in running the Server !");
    return;
  }
  console.log("Server is up and running on port : ", port);
});
