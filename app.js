const express = require("express");
const dataRoutes = require("./routes/api.js");
const authRoutes = require("./routes/auth.js");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");

bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cookieParser());
const uri =
  "mongodb+srv://Rishabh:Fg8r42YovE01PZjp@cluster0.9vvbp.mongodb.net/Farm";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    //listening for requests
    const port = 8080;
    const host = "127.0.0.1";
    app.listen(port, host, () => {
      console.log(`listening at ${port}`);
    });
  })
  .catch((err) => console.log("error connecting to db", err));

app.use(dataRoutes);
app.use(authRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
