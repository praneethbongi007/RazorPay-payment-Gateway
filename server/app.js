import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import PaymentRoute from "./routes/PaymentRoutes.js";
dotenv.config({ path: "./config/config.env" });

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", PaymentRoute);

app.use("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
