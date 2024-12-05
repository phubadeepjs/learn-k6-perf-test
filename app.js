const express = require("express");

const app = express();

const port = 3000;

let count = 0;

app.get("/", (req, res) => {
    count++
  res.send("Hello, world!" + `Count: ${count}`);
});

app.get("api/data", (req, res) => {
  res.json({ message: "This is some test data" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
