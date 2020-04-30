import { ADD_ADDRESS } from "../actions/actionTypes";

const initialState = {
  address: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        address: [action.payload, ...state.address],
      };
    default:
      return state;
  }
};

export default reducer;
