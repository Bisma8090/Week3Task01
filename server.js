// server.js
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/middleware");

const app = express();

app.use(express.json());

// 1️⃣ Serve Swagger JSON
app.get("/swagger.json", (req, res) => {
  res.json(swaggerSpec);
});

// 2️⃣ Swagger UI setup (load JSON dynamically)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(null, {
  swaggerUrl: "/swagger.json",
  explorer: true
}));

// 3️⃣ API routes
app.use("/api", taskRoutes);

// 4️⃣ Error handler last
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});