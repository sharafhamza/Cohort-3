const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  res.send({
    message: "Message send",
  });
});

userRouter.post("/signin", (req, res) => {
  res.send({
    message: "Message send",
  });
});

userRouter.post("/purchases", (req, res) => {
  res.send({
    message: "Message send",
  });
});

module.exports = {
  userRouter: userRouter,
};
