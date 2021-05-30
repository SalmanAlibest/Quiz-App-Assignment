import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import quizRoutes from "./routes/index.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/questions", quizRoutes);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://Salman_Ali_123:wIgBMnziUZqKr4MY@cluster0.s3kvj.mongodb.net/QuizApp?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running at Port ${PORT} and DB Connect Successfully`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
