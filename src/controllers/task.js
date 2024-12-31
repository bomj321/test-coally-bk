const EvaluationService = require("../services/task.service");
const service = new EvaluationService();

let controller = {
  save: async (req, res, next) => {
    try {
      const body = req.body;
      const evaluation = await service.save(body);
      res.status(201).json(evaluation);
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    const state = req.param("state");
    if (state) {
      try {
        const evaluations = await service.getAll(state);
        res.status(200).json(evaluations);
      } catch (error) {
        next(error);
      }
    } else {
      res.status(400).json({ message: "State is required" });
    }
  },

  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const evaluation = await service.getById(id);

      if (evaluation) {
        res.status(200).json(evaluation);
      } else {
        res.status(404).json();
      }
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const evaluation = await service.update(id, body);
      res.status(200).json({ ...evaluation._doc, ...req.body });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const evaluation = await service.delete(id);
      res.status(200).json(evaluation ?? []);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = controller;
