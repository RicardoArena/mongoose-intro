const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB connected to:", dbCOnnect.connection.name);
  } catch (err) {
    console.log("DB conncetion error", err);
  }
}
module.exports = connect;
