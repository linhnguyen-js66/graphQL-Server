import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const AuthorSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});
