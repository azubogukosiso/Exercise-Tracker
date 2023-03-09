const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const dotenv = require('dotenv');
dotenv.config();

// route imports
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// connection to the dbase
mongoose.connect("mongodb://localhost:27017/Exercise-Tracker2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("connection successful!");
  app.listen(process.env.API_PORT, () => {
    console.log("server is running at port " + process.env.API_PORT);
  });
});

app.use(cors());
app.use(express.json());

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
