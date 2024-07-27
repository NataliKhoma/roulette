const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/spin", (req, res) => {
  const options = req.body.options;
  if (!options || options.length === 0) {
    return res.status(400).json({ error: "Options are required" });
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  const result = options[randomIndex];

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
