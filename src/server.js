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
const { User } = require("./schema/user");
const { Item } = require("./schema/item");

// 라우트 - 모든 사용자 데이터 가져오기
app.get("/users", (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data); // 사용자 데이터를 JSON 형식으로 클라이언트에게 전송
    })
    .catch((err) => {
      console.error("Failed to fetch users:", err);
      res.status(500).json({ error: "Failed to fetch users" });
    });
});

app.get("/cart", (req, res) => {
  //cart로 들어가면 item 반환
  Item.find({})
    .then((data) => {
      res.json(data); // 사용자 데이터를 JSON 형식으로 클라이언트에게 전송
    })
    .catch((err) => {
      console.error("Failed to fetch items:", err);
      res.status(500).json({ error: "Failed to fetch items" });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
