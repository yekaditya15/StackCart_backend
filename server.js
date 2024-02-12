import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
//configure env
dotenv.config();


// rest object
const app = express();

//database config
connectDB();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//rest objects
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce App </h1>")
})

// PORT
const PORT = process.env.PORT || 8080;

// Run Listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`.blue
    );
})
