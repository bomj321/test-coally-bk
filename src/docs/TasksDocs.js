const tag = "Tasks";
const endpointBase = "/tasks";

const swaggerPaths = {
  [endpointBase]: {
    get: {
      tags: [tag],
      summary: "Path to get all tasks",
      parameters: [
        {
          name: "state",
          in: "query",
          required: true,
          description: "State of all tasks",
          example: "COMPLETED || TO_DO",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Get all tasks",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error401",
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
    post: {
      tags: [tag],
      summary: "path to create a task",

      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/task",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Task created",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error401",
              },
            },
          },
        },

        500: {
          description: "Could not update task",
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
          url: "http://localhost:8081/api/",
        },
      ],
    },
  },

  [`${endpointBase}/{id}`]: {
    get: {
      tags: [tag],
      summary: "path to get a task",

      responses: {
        200: {
          description: "Task update",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error401",
              },
            },
          },
        },

        500: {
          description: "Could not update task",
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
          url: "http://localhost:8081/api/",
        },
      ],
    },
    put: {
      tags: [tag],
      summary: "path to update a task",
      parameters: [
        {
          name: "{taskId}",
          in: "path",
          required: true,
          description: "Id by task",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/task",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Task update",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error401",
              },
            },
          },
        },

        500: {
          description: "Could not update task",
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
          url: "http://localhost:8081/api/",
        },
      ],
    },
    delete: {
      tags: [tag],
      summary: "path to update a delete",

      responses: {
        200: {
          description: "Task deleted",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              type: "object",
              schema: {
                type: "object",
                $ref: "#/components/schemas/error401",
              },
            },
          },
        },

        500: {
          description: "Could not update task",
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
          url: "http://localhost:8081/api/",
        },
      ],
    },
  },
};
module.exports = swaggerPaths;
