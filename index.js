import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
// Configure env
dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(
  cors({
    origin: ["https://stack-cart-frontend.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev")); // Use "dev" format for morgan logging

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});
// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.blue);
});
