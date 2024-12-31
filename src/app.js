//Requires
let express = require("express");
let swaggerUi = require("swagger-ui-express");
let swaggerSetup = require("./docs/swagger");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

//Execute express

let app = express();
app.use(express.json());

//Load route's files

let auth_routes = require("./routes/auth.js");
let task_routes = require("./routes/task.js");

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Swagger
app.use("/api/swagger", [...swaggerUi.serve], swaggerUi.setup(swaggerSetup));

//Rewrite Routes
app.use("/api", auth_routes);
app.use("/api", task_routes);

//Stategies
require("./utils/auth");

//Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Export Module
module.exports = app;
