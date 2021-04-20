"use strict";
//logs the request and the path from the client
const logger = (req, res, next) => {
  console.log("Request data:", req.method, req.path);
  next();
};

module.exports = logger;
