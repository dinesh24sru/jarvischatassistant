const bcrypt = require("bcrypt");
const { connectMongoDB } = require("../utils/db.utils");

async function authenticateUser(req) {
  const { userName, password } = req.body;
  const collection = await connectMongoDB("users");
  const user = await collection.findOne({ userName });
  console.log("user", user.password);
  if (!user) {
    return { message: "User not found", statuscode: 500 };
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    return { message: "Login Successful", statuscode: 200 };
  } else {
    return { message: "UserName and Password does not match", statuscode: 500 };
  }
}

module.exports = { authenticateUser };
