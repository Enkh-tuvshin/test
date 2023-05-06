const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { postRoutes } = require("./routes/postRoutes");
require("dotenv").config();
  
console.log(process.env.PORT);

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connect()

app.use(postRoutes);

app.get("/", (req, res) => {
  res.send("Well");
});

app.listen(port, () => {
  console.log("Server running at :", port);
});