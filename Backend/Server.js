const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connect_to_database = require("./Config/Database_Connection");

//---------------------------------CONFIGURATIONS------------------------------------
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
connect_to_database();
//---------------------------------ROUTES------------------------------------
app.get("/", (req, res) => {
  return res.status(200).send({
    success: true,
    message: "AlgoHive API is running...",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT} :)`.bgGreen.black);
});
