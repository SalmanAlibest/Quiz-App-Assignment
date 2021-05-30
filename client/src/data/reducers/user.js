import { GET_USER, ADD_USER } from "../actionsTypes";

const fetchUser = (user = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case ADD_USER:
      return action.payload;
    default:
      return user;
  }
};

export default fetchUser;
