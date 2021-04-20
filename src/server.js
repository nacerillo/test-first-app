`use strict`; //JS "strict node". standardized js only

const e = require("express");
const express = require("express");
const app = express();

const notFound = require("./error-handlers/404.js");
const errors = require("./error-handlers/500.js");
const logger = require("./middleware/logger.js");
//moduels.exports is global object in nodejs
//handle parsing of parsing of req.body

app.use(express.json());

//app.use(logger);

//http://localhost:3333/hello
app.get("/hello", (req, res) => {
  console.log(req.query); //query string parameters
  res.send("hello world!");
});

//GET http://localhost:3003/hello/brian
app.get("/hello/:person", (req, res) => {
  console.log(req.params.person);
  res.send({ name: req.params.person });
});

//functions are hoisted to the top of the scope
app.get("/cool", square(10), (req, res) => {
  console.log(req.squared);
});

app.post("/test-post", (req, res) => {
  console.log(req.body);
  res.send("great, cool");
});
//function currying
function square(n) {
  return (req, res, next) => {
    if (typeof n !== "number") {
      next("not a number!"); //error first middleware
    } else {
      req.squared = n * n;
      next();
    }
  };
}

//catch all route handles routes that arent found
app.use("*", notFound);
//handles generic server errors
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`What's up, Doc!? Welcome to port: ${port}`);
    });
  },
  rando: "random shiznit",
};
