import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  const uri = process.env.RENDER_MONGO_URI!;
  await mongoose.connect(uri);
  console.log('MongoDB connected');
};