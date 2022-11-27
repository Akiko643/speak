import mongoose from "mongoose";
import "./config.js";

mongoose.connect(`${process.env.MONGO_URL}`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
