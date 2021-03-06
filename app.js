const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const dbConnect = require("./config/db.config");
dbConnect();

const restRouter = require("./models/routes/rest.router");
app.use("/rest", restRouter);

const reviewRouter = require("./models/routes/review.router");
app.use("/review", reviewRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and runing at port ${process.env.PORT}`);
});
