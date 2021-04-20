`use strict`;

module.exports = (req, res, next) => {
  //after we do stuff, and it works then go on to the next thing
  res.status(404).json({ msg: "not found" });
  next();
};
