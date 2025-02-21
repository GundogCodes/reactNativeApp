const express = require("express");
const app = express();

/****************************************************************** APP SETUP ******************************************************************/
//import path to use and manipulate the file paths on our system
const path = require("path");

//import log http requests with morgan
const logger = require("morgan");

//using json packages to communicate with server/clients
app.use(express.json());
app.use(express.static("dist"));
//app will use a local object in its responses which can contain info from the requests
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

//use logger to log http requests
app.use(logger("dev"));
//check if there is a user in the requests

/****************************************************************** APP ROUTES SETUP ******************************************************************/
//defining routes(endpoints) of app(api) where req/res can be done
//and information can be exchanged and check if they need to be logged in

// catch all for wrong routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

module.exports = app;
