// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Please fill out all fields");
  }

  console.log("New message:", name, email, message);
  res.send("Message sent successfully!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});