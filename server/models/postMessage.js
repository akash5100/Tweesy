import { Mongoose } from "mongoose";

const postSchema = Mongoose.Schema({
  title: String,
  message: String,
  creator: String,
});
