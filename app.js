const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("*", (req, res) => {
    if (err) {
        // 如果出現錯誤，發送錯誤訊息
        res.send("404 Not Found.");
    }
}); 

app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});