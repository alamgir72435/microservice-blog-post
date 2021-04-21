const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;
  console.log(event);
  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  res.send({ status: "OK" });
});

const PORT = process.env.PORT || 4005;

app.listen(PORT, () => console.log(`server Running on port ${PORT}`));
