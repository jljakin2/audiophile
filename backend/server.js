import express from "express";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// connect the dotenv package so we can use environment variables
dotenv.config();

// connect to our db.js file to connect backend server to mongo database
connectDB();

// initiate our app with express
const app = express();

app.use(express.json());

// all api routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", res =>
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
  );
} else {
  app.get("/", res => {
    res.send("API is running...");
  });
}

// bring in middleware for errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
