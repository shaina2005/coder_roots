import express from "express";
import cors from "cors";
const app = express();
import mongoose from "mongoose";
import loginRoute from "./routes/loginRoutes.js";
import registerRoute from "./routes/registerRoute.js";
import bookRoutes from "./routes/bookRoutes.js";
import cookieParser from "cookie-parser";

mongoose.connect("mongodb://localhost:27017/coder_roots").then(() => {
  console.log("Database connected : ", mongoose.connection.name);
});
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const customMiddleware = (req, res, next) => {
  console.log(` Method : ${req.method} ,  URL : ${req.url}`);
  next();
};
app.use(customMiddleware);

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/book", bookRoutes);

app.use(express.json());
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running at : ", 5000);
});
