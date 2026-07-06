import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
import { connectToDatabase } from "./lib/db";

dotenv.config();

const DEFAULT_PORT = parseInt(process.env.PORT || "8080", 10);

const startServer = async (port: number) => {
  try {
    await connectToDatabase();
    console.log("Connected to the database");

    const server = app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
      console.log("search");
    });

    server.on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.warn(`Port ${port} is in use. Trying port ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error("Server error:", err);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error("Connection Failed!", error);
    process.exit(1);
  }
};

startServer(DEFAULT_PORT);

// Handle graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await mongoose.connection.close();
  process.exit(0);
});