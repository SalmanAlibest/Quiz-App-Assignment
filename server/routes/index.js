import express from "express";
import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/questions.js";
import { login } from "../controllers/login.js";
import { signup } from "../controllers/signup.js";
const router = express.Router();
router.get("/", getQuestions);
router.post("/", createQuestion);
router.patch("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);
router.post("/login", login);
router.post("/signup", signup);

export default router;
