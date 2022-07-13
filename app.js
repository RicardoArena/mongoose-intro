const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const dbConnect = require("./config/db.config");
dbConnect();

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and runing at port ${process.env.PORT}`);
});
