const express = require("express");
const router = express.Router();
const User = require("../model/user");

// data sent by user is in req.body
router.post("/signup", async (req, res) => {
  // res.send({ name: "dummy signup" });
  const user = await new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).json({ msg: "user created" });
    })
    .catch((err) => {
      res.status(400).json({ error: "User could not be created" });
    });
});

router.post("/login", async (req, res) => {
  // res.send({ name: "dummy login" });
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password); //static method find to all User objects
    res.cookie("farmid", user.farmid);
    res.status(200).json({ farmid: user.farmid });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "error login" });
  }
});

module.exports = router;
