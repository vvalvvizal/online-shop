const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());

const userdata = [{ user: "id" }];
app.get("/api", (req, res) => {
  res.json(userdata);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
