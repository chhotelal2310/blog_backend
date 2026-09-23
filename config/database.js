import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MonoDB Connected Successfully.");
  } catch (error) {
    console.log(`MongoDB Connection errro: ${error}`);
    process.exit(1);
  }
};

export default dbConnect;