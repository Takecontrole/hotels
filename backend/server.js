import express from'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import hotelsRouter from './routes/hotels.js';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


const port = process.env.PORT || 8500;

app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use('/api/hotels', hotelsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use("/api/rooms", roomsRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});