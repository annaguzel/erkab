import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  GET_SCHOOL,
  ADD_CHILD,
  GET_CHILDREN,
} from "../actions/actionTypes";

const initialState = {
  address: [],
  schools: [],
  children: [],
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

    case ADD_CHILD:
      return {
        ...state,
        children: [action.payload, ...state.children],
      };

    case GET_CHILDREN:
      return {
        ...state,
        children: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
