const mongoose = require("mongoose");
// 스키마 배열 정보 표시 (mongoose가 체크해주고 db에 저장해주는 역할)
const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
});

// mongoose에 schema 전달 (collection을 만든다는 뜻)
var User = mongoose.model("users", UserSchema);
// 외부에서 가져다가 쓴다는 뜻
module.exports = { User };
