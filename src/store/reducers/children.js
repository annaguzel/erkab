import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  GET_SCHOOL,
} from "../actions/actionTypes";

const initialState = {
  address: [],
  schools: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        address: [action.payload, ...state.address],
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        address: [action.payload, ...state.address],
      };

    case GET_SCHOOL:
      return {
        ...state,
        schools: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
