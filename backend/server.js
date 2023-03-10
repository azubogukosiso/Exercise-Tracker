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
mongoose.connect(process.env.MONGO_URL_2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  app.listen(process.env.API_PORT, console.log("live"));
});

app.use(cors());
app.use(express.json());

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
