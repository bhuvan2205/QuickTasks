const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 4000;

app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.get("/todos", (req, res) => {
  res.json([
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
  ]);
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
