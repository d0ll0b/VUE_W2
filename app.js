const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});