const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Task Manager API",
    version: "1.0.0",
    description:
      "A simple RESTful API to manage tasks (CRUD) using Express.js. Includes search and stats endpoints.",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
      description: "Local server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "routes/*.js")], // ✅ fixed path
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;