import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "*" }));

app.use("/posts", postRouter);
app.use("/user", userRoutes);
const port = process.env.PORT || 5000;

// these are not required but rather have it else it will show error in console
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port, () => console.log(`server running on ${port}`)))
  .catch((error) => console.log(error.message));
