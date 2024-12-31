let supertest = require("supertest");
let app = require("../../app");

const email = "jmob612@gmail.com";
const password = "12345678";

let api = supertest(app);

const login = async () => {
  try {
    const response = await api
      .post("/api/auth/login")
      .send({ email, password });

    return response.body;
  } catch (error) {}
};

module.exports = login;
