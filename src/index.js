"use strict";

let mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
let app = require("./app.js");
const { config } = require("./config/config");

const dotenv = require("dotenv");
dotenv.config();
// mongodb environment variables

mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");

    // Creacion del servidor

    app.listen(config.port, function () {
      console.log("up and running on port " + config.port);
    });
  })
  .catch((err) => console.log(err));
