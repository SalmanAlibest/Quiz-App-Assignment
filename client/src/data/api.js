import axios from "axios";

// const url = "http://localhost:5000/questions";
const url = "https://quizapp2839.herokuapp.com/questions";
export const fetchQuestions = () => axios.get(url);
export const createQuestion = (newQuest) => axios.post(url, newQuest);
export const updateQuestion = (id, updatedQuestion) =>
  axios.patch(`${url}/${id}`, updatedQuestion);
export const deleteQuestion = (id) => axios.delete(`${url}/${id}`);
export const login = (userData) => axios.post(`${url}/login`, userData);
export const signup = (userData) => axios.post(`${url}/signup`, userData);
