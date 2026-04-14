const express = require("express");
const app = express();

// serve current folder (since no public folder)
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});