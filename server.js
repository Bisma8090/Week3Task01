const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./Middlewares/middleware");

const app = express();

app.use(express.json());

// ✅ 1. Swagger FIRST
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// ✅ 2. API routes AFTER
app.use("/api", taskRoutes);

// ✅ 3. Error handler LAST
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});