import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import { userRouter } from "./routes/users.js";

const app = express();
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(MONGODB_URI);

app.listen(3001, () => console.log("SERVER STARTED!"));
