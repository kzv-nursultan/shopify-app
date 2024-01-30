const mongoose = require("mongoose");
const db_url =
  "mongodb+srv://nurs_kzv:my_mongodb_2024@cluster0.ktgidgq.mongodb.net/?retryWrites=true&w=majority";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(db_url);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectMongoDb;
