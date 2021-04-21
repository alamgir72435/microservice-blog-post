const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "postCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "commentCreated") {
    const { postId, id, content } = data;
    post = posts[postId];
    post.comments.push({ id, content });
  }
  console.log(posts);
  res.send({});
});

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => console.log(`server Running on port ${PORT}`));
