const mongoose = require("mongoose");
const CONFIG = require("./config");

const connectMongoDb = async () => {
  try {
    await mongoose.connect(CONFIG.MONGO_DB_URL);
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectMongoDb;
