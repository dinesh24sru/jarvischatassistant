const MongoClient = require("mongodb").MongoClient;

const connectMongoDB = async (collectionName) => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = await client.db(process.env.MONGO_DBNAME); // Access the database
  const collection = await db.collection(collectionName);
  return collection;
};

module.exports = {
  connectMongoDB,
};
