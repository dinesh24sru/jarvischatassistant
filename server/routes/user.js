var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.get("/list", userController.getUserList);

module.exports = router;
