import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

//temp gonna store this in virtual env later
const CONNECTION_URL =
  "mongodb+srv://tweesy101:emmawatson101@cluster0.94m6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;

// these are not required but rather have it else it will show error in console
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port, () => console.log(`server running on ${port}`)))
  .catch((error) => console.log(error.message));
