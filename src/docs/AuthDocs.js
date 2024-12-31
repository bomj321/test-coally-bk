const tag = "Auth";
const endpointBase = "/auth";

const swaggerPaths = {
  [`${endpointBase}/register`]: {
    post: {
      tags: [tag],
      summary: "Path to get create a user",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user",
            },
          },
        },
      },
      responses: {
        200: {
          description: "User created",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/user",
              },
            },
          },
        },

        500: {
          description: "Error",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error500",
              },
            },
          },
        },
      },
      security: [
        {
          ApiKeyAuth: [],
        },
      ],
      servers: [
        {
          url: "http://localhost:8081/jurban360/api/",
        },
      ],
    },
  },
  [`${endpointBase}/login`]: {
    post: {
      tags: [tag],
      summary: "Path to get login",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Token",
          content: {
            "application/json": {
              token: "string",
            },
          },
        },

        500: {
          description: "Error",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error500",
              },
            },
          },
        },
      },
      security: [
        {
          ApiKeyAuth: [],
        },
      ],
      servers: [
        {
          url: "http://localhost:8081/jurban360/api/",
        },
      ],
    },
  },
};
module.exports = swaggerPaths;
