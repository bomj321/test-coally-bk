let mongoose = require("mongoose");
let supertest = require("supertest");
let app = require("../app");
let login = require("../utils/tests/login");
let api = supertest(app);
let body;

let task = {
  title: "Evaluation 4",
  description: "Description 4",
  state: "COMPLETED",
};

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL);
  body = await login();
});

describe("Testing endpoint with token and without token", () => {
  test("Testing tasks without Token", async () => {
    await api.get("/api/tasks").expect(401);
  });

  test("Testing tasks with Token and completed", async () => {
    await api
      .get("/api/tasks?state=COMPLETED")
      .set("Authorization", `Bearer ${body.token}`)
      .expect(200);
  });

  test("Testing tasks with Token and TO_DO", async () => {
    await api
      .get("/api/tasks?state=TO_DO")
      .set("Authorization", `Bearer ${body.token}`)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});

describe("Testing rest endpoints", () => {
  describe("POST", () => {
    test("Creating one task", async () => {
      await api
        .post("/api/tasks")
        .set("Authorization", `Bearer ${body.token}`)
        .send(task)
        .expect(201)
        .expect("Content-Type", "application/json; charset=utf-8");
    });

    test("Creating one task with a bad object", async () => {
      await api
        .post("/api/tasks")
        .set("Authorization", `Bearer ${body.token}`)
        .send({})
        .expect(400)
        .expect("Content-Type", "application/json; charset=utf-8");
    });
  });

  describe("PUT", () => {
    test("Updating one visit with a bad id", async () => {
      await api
        .put(`/api/tasks/667e3a623f88cf4d0a7d1fc2`)
        .set("Authorization", `Bearer ${body.token}`)
        .send({})
        .expect(500)
        .expect("Content-Type", "application/json; charset=utf-8");
    });

    test("Updating one visit with a good id", async () => {
      const response = await api
        .get("/api/tasks?state=COMPLETED")
        .set("Authorization", `Bearer ${body.token}`);

      const task = response.body[0];

      console.log("task", task);

      let taskToUpdate = {
        title: task.title,
        description: task.description,
        state: task.state,
      };

      await api
        .put(`/api/tasks/${task._id}`)
        .set("Authorization", `Bearer ${body.token}`)
        .send(taskToUpdate)
        .expect(200)
        .expect("Content-Type", "application/json; charset=utf-8");
    });
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
