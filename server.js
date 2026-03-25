const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/swagger-ui-dist", express.static(path.join(__dirname, "node_modules/swagger-ui-dist")));

app.use("/api", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));