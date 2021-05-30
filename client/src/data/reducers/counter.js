import { GET_COUNTER, UPDATE_COUNTER } from "../actionsTypes";

const fetchCounter = (counter = 0, action) => {
  switch (action.type) {
    case GET_COUNTER:
      return action.payload;

    case UPDATE_COUNTER:
      return action.payload;
    default:
      return counter;
  }
};

export default fetchCounter;
