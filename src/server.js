const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// MongoDB 연결
const MongoConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vvalvvizal:vvalvvizal@cluster0.pwgwt9c.mongodb.net/Online-shop"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};
MongoConnect();

// 사용자 데이터 모델 정의
const { User } = require("./user");

// 라우트 - 사용자 데이터
app.get("/api/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error("Failed to fetch users", err);
      res.status(500).send("Failed to fetch users");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
