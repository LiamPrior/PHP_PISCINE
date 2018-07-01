var express = require('express');
var BodyParser = require('body-parser');
// var aurel = require("./aurel.js");
var app = express();
var fs = require('fs');

app.use(express.static("resources"));
var listener = app.listen(8190, () => {
  console.log("listening on port 8190");
});
