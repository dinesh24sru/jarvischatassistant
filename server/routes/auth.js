var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/login", authController.authenticateUser);

module.exports = router;
