const { connectMongoDB } = require("../utils/db.utils");

async function getUserList() {
  const collection = await connectMongoDB("users");
  const users = await collection.find({}).toArray();
  return users;
}

module.exports = {
  getUserList,
};
