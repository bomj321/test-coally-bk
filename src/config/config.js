require("dotenv").config();

const config = {
  mongoUrl: process.env.MONGO_URL,
  baseUrl: process.env.BACKEND_URL,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 8081,
};

module.exports = { config };
