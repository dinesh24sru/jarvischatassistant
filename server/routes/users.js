var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/list", async function (req, res, next) {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(process.env.MONGO_DBNAME); // Access the default database

    const collection = db.collection("users"); // Replace 'users' with your collection name
    const users = await collection.find({}).toArray();

    client.close();

    res.json(users);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async function (req, res, next) {
  const { userName, password } = req.body;
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    const db = client.db(process.env.MONGO_DBNAME); // Access the default database
    const collection = db.collection("users"); // Replace 'users' with your collection name
    const user = await collection.findOne({ userName });
    console.log("user", user.password);
    if (!user) {
      res.status(500).send("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      res.status(200).send("Login Successfull");
    } else {
      res.status(500).send("UserName and Password does not match");
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    client.close();
  }
});

module.exports = router;
