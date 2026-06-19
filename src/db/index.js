import moongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express"

const app = express();

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    const connectionInstance = await moongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `MongoDB connected successfully. Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error Connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
