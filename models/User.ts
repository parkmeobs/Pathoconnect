import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Avoid model overwrite issues in Next.js hot reload
export default mongoose.models.User || mongoose.model("User", UserSchema);
