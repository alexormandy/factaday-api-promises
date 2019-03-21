const express = require("express");
const path = require("path");
const app = express();
const fact = require("./factaday");

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

app.get("/fact", (req, res) => {
  fact(req.query.month, req.query.day).then(response => res.send(response));
});

app.listen(80, () => {
  console.log("listening on port 3000");
});
