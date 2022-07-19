import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: Number,
  },
});
