"user strict";
const passport = require("passport");
const { ROLE } = require("../enums/taskState.js");

const validatorHandler = require("../middlewares/validator.handler.js");

const {
  createUserSchema,
  loginUserSchema,
} = require("../schemas/user.schema.js");
let express = require("express");
let router = express.Router();

let AuthController = require("../controllers/auth.js");

router.post(
  "/auth/register",
  [validatorHandler(createUserSchema, "body")],
  AuthController.save
);

router.post(
  "/auth/login",
  [
    validatorHandler(loginUserSchema, "body"),
    passport.authenticate("local", { session: false }),
  ],
  AuthController.login
);

module.exports = router;
