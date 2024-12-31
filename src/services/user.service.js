const bcrypt = require("bcrypt");
let UserSchema = require("../models/user");

class UserService {
  constructor() {}

  async save(data) {
    const hash = await bcrypt.hash(data.password, 10);
    let userSchema = new UserSchema({ ...data, password: hash });
    const newUser = await userSchema.save();
    const { password, ...user } = newUser._doc;

    return user;
  }

  async findByEmail(email) {
    const rta = await UserSchema.findOne({ email });
    return rta;
  }
}

module.exports = UserService;
