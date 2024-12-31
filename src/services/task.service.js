let TaskSchema = require("../models/task");

class EvaluationService {
  async save(body) {
    let taskSchema = new TaskSchema(body);
    const task = await taskSchema.save();
    return task;
  }

  async getAll(state) {
    const tasks = await TaskSchema.find({ state });
    return tasks;
  }

  async getById(id) {
    const task = await TaskSchema.findById(id);
    return task;
  }

  async update(id, body) {
    const task = await TaskSchema.findByIdAndUpdate(id, body);
    return task;
  }

  async delete(id) {
    const task = await TaskSchema.findOneAndDelete({ _id: id });
    return task;
  }
}

module.exports = EvaluationService;
