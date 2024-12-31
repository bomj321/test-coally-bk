const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");

const service = new UserService();
const authService = new AuthService();

let controller = {
  save: async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.save(body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const user = req.user;
      res.json(authService.signToken(user));
    } catch (error) {
      next(error);
    }
  },
};
module.exports = controller;
