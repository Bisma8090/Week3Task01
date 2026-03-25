const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/middleware");

const app = express();

app.use(express.json());

app.use("/api", taskRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(errorHandler);

module.exports = app;