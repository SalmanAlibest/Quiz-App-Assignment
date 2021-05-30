import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  GET_COUNTER,
  UPDATE_COUNTER,
  GET_USER,
  ADD_USER,
} from "./actionsTypes";

import * as api from "./api";

export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestions();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQuestion = (id, question) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestion(id, question);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCounter = (counter) => async (dispatch) => {
  try {
    dispatch({ type: GET_COUNTER, payload: counter });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCounter = (counter) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COUNTER, payload: counter + 1 });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.login(userData);
    console.log("login Actoin", data);

    dispatch({ type: GET_USER, payload: data[0] });
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);
    console.log("signup Action", data);
    dispatch({ type: ADD_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
