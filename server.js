import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
// Configure env
dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Use "dev" format for morgan logging
app.use("/api/v1/category", categoryRoutes);

// Routes
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.blue);
});
