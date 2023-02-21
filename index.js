const express = require("express");
const app = express();
const PORT = 4040;

app.get("/api/test", function (req, res) {
  res.json("Hello World");
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
