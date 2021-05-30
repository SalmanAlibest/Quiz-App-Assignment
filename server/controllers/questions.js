import QuizQuestion from "../models/quizQuestion.js";
import mongoose from "mongoose";
export const getQuestions = async (req, res) => {
  try {
    const quizQuestion = await QuizQuestion.find();
    console.log("Get", quizQuestion);
    res.status(200).json(quizQuestion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuestion = async (req, res) => {
  const { question, options, answer } = req.body;
  const newQuestion = new QuizQuestion({
    question,
    options,
    answer,
  });
  console.log("Create", question);
  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, options, answer } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Question with id: ${id}`);

  const updatedQuestion = {
    question,
    options,
    answer,

    _id: id,
  };

  await QuizQuestion.findByIdAndUpdate(id, updatedQuestion, { new: true });

  res.json(updatedQuestion);
};
export const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Question with id: ${id}`);

  await QuizQuestion.findByIdAndRemove(id);

  res.json({ message: "Question deleted successfully." });
};
