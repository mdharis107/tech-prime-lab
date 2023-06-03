const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");

require("dotenv").config();

const app = express();

const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected Successfully to the Database");
  } catch (err) {
    console.log("Failed to connect Database");
    console.log(err);
  }
  console.log(` The port is running in ${PORT}`);
});
