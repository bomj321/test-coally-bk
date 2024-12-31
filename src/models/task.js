"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TaskSchema = Schema(
  {
    title: String,
    description: String,
    note: Number,
    state: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
module.exports = mongoose.model("Task", TaskSchema);
