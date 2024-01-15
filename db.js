const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://127.0.0.1:27017";
const DB_NAME = "test-mongodb";

const client = new MongoClient(DB_URL);

async function connectDB() {
  await client.connect();
  const db = client.db(DB_NAME);

  const userCollection = await db.collection("user");

  // await userCollection.find({}).forEach(function (item) {
  //   userCollection.updateOne(
  //     { _id: item._id },
  //     {
  //       $set: { age: Math.floor(Math.random() * 50) + 1 },
  //     }
  //   );
  // });

  // const result = await userCollection.find(
  //   {},
  //   { sort: { age: 1 }, projection: { age: 1 }, limit: 10 }
  // );

  const result = await userCollection.aggregate([
    {
      $match: {
        age: 40,
      },
    },
    {
      $project: {
        age: 1,
      },
    },
    {
      
    }
  ]);
  console.log(await result.toArray());
}

module.exports = {
  connectDB,
};
