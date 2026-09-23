import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
  },

  { timestamps: true },
);

export default mongoose.model("User", SignUpSchema);