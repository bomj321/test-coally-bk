let swaggerJSDoc = require("swagger-jsdoc");
let TasksDocs = require("./TasksDocs");
let AuthDocs = require("./AuthDocs");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "URBAN360",
    description: "Desarrollado por José Ortega",
    version: "0.0.1",
  },
  servers: [
    {
      url: "http://localhost:8081/api/",
    },
  ],
  components: {
    schemas: {
      user: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },

      task: {
        type: "object",
        required: ["title", "description", "state"],
        properties: {
          _id: {
            type: "string",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          state: {
            type: "string",
          },
        },
      },

      error401: {
        type: "object",
        properties: {
          code: {
            type: "number",
            default: 401,
          },
        },
      },

      error500: {
        type: "object",
        properties: {
          code: {
            type: "number",
            default: 500,
          },
        },
      },
    },
  },
  paths: {
    ...AuthDocs,
    ...TasksDocs,
  },
};

const swaggerOptions = {
  swaggerDefinition,
  apis: [],
};

module.exports = swaggerJSDoc(swaggerOptions);
