require("dotenv").config();

const config = {
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
