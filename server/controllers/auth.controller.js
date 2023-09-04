const authService = require("../services/auth.service");

async function authenticateUser(req, res, next) {
  try {
    res.json(await authService.authenticateUser(req));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { authenticateUser };
