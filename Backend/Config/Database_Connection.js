const mongoose = require("mongoose");

const connect_to_database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database :)".bgGreen.black);
  } catch (error) {
    console.log("ERROR: UNABLE TO CONNECT DATABASE :(".bgRed.black);
    console.log(`${error}`);
  }
};

module.exports = connect_to_database;
