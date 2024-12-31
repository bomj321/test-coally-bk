"user strict";
const passport = require("passport");
let express = require("express");
let router = express.Router();

const validatorHandler = require("../middlewares/validator.handler.js");

const {
  createTaskSchema,
  updateTaskSchema,
  getTaskSchema,
} = require("../schemas/task.schema.js");

let EvaluationController = require("../controllers/task.js");

router.post(
  "/tasks",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(createTaskSchema, "body"),
  ],
  EvaluationController.save
);
router.get(
  "/tasks",
  [passport.authenticate("jwt", { session: false })],
  EvaluationController.getAll
);
router.get(
  "/tasks/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getTaskSchema, "params"),
  ],
  EvaluationController.getById
);

router.put(
  "/tasks/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getTaskSchema, "params"),
    validatorHandler(updateTaskSchema, "body"),
  ],
  EvaluationController.update
);
router.delete(
  "/tasks/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getTaskSchema, "params"),
  ],
  EvaluationController.delete
);

module.exports = router;
