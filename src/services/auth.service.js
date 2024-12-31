const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { config } = require("./../config/config");
const UserService = require("./user.service");
const service = new UserService();

class AuthService {
  async getUser(email, pass) {
    const user = await service.findByEmail(email);

    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }

    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      token,
    };
  }
}

module.exports = AuthService;
