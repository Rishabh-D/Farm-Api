const express = require("express");
const router = express.Router();
const DataRT = require("../model/realTimeData");

//fetch all data
router.get("/data", async (req, res) => {
  // res.send([{ name: "dummy data" }]);
  console.log("farm id is: ", req.cookies["farmid"]);
  //fetch lat 5 data inserted
  if (req.cookies["farmid"]) {
    const data = await DataRT.find({ farmid: req.cookies["farmid"] })
      .sort({ _id: -1 })
      .limit(5);
    console.log("data fetched: ", data);
    res.status(200).json({ data });
  } else {
    res.status(400).json({ error: "You need to Login First" });
  }
});

router.post("/data", (req, res) => {
  console.log("pushing data to server");
  const pushdata = new DataRT(req.body);
  pushdata
    .save()
    .then((result) => {
      res.send("data pushed successfully");
    })
    .catch((err) => {
      console.log("data could not be pushed into the database");
      res.send(err);
    });
});

module.exports = router;
