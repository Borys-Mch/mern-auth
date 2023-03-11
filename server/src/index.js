import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI);

app.listen(3001, () => console.log("SERVER STARTED!"));
