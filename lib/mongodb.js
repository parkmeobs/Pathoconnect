import mongoose from "mongoose";

let isConnected = false; // track connection

export async function connectDB() {
  if (isConnected) return; // reuse existing connection

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "nextjsDB", // optional, specify your DB name
    });
    isConnected = true;
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.log(error);
    throw new Error("MongoDB connection failed");
  }
}
