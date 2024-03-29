import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to db!"))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)