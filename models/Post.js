import mongoose from "mongoose";

const PostShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: [String],
      default: [],
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.model("Post", PostShema);
