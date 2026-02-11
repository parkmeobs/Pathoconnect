

import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;
 const MONGODB_URI = "mongodb+srv://parkme_db_user:parkme_obs@pathoconnect.lkgqn4j.mongodb.net/?appName=Pathoconnect";;


if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "nextjsDB",
    });
    isConnected = true;
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error(error);
    throw new Error("Database connection failed");
  }
}
