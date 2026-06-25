import express from "express";

import employeeRoutes from "./routes/employee.routes";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/employees", employeeRoutes);

export default app;
