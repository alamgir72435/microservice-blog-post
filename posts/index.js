const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const cors = require("cors");
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server Running on port ${PORT}`));
