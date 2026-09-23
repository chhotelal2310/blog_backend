import express from "express";
import { configDotenv } from "dotenv";
import dbConnect from "./config/database.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

/* -------------------------- Load Environment Variables -------------------------- */
configDotenv();

/* ------------------------------------ PORT -------------------------------------- */
const PORT = process.env.PORT || 5000;

/* --------------------------------- Middleware ----------------------------------- */
app.use(express.json());

/* ----------------------------- Database + Server ---------------------------------*/
const startServer = async () => {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`Server started at: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

app.use("/api/v1", blogRoutes);
