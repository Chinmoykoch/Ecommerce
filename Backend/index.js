import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(`connected to ${mongoose.connection.host}`);
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }));
app.use(cookieParser());
app.use(express.json());
connect();

app.listen(process.env.PORT, () => {
  console.log(`App listening on port : ${process.env.PORT}`);
});



// routes

import routes from "../Backend/routes/product.js";

app.use("/api/v1", routes);
