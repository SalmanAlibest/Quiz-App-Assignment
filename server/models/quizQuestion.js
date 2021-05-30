import mongoose from "mongoose";
const questionSchema = mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  createdAt: { type: Date, default: Date.now },
});
const QuizQuestion = mongoose.model("QuizQuestion", questionSchema);
export default QuizQuestion;
