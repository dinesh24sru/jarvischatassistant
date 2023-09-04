const userService = require("../services/user.service");

async function getUserList(req, res, next) {
  try {
    res.json(await userService.getUserList());
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getUserList,
};
