const express = require("express");
const app = express();

app.use(express.json());

// 🟢 test route
app.get("/", (req, res) => {
  res.json({ message: "My API is alive 🚀" });
});

// 🟡 example route
app.get("/hello", (req, res) => {
  res.json({ text: "Hello from my hosted instance 😎" });
});

// 🚀 start server (IMPORTANT for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
