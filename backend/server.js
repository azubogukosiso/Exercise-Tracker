const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

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
  app.listen(5001, () => {
    console.log("server is running at port 5001");
  });
});

app.use(cors());
app.use(express.json());

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
