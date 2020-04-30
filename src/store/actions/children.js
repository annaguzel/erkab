import { ADD_ADDRESS } from "./actionTypes";

import instance from "./instance";

export const addAddress = (position) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/add/address/", position);
      const newAddress = res.data;

      dispatch({
        type: ADD_ADDRESS,
        payload: newAddress,
      });
    } catch (error) {
      console.error(error);
      console.error(error.response.data);
    }
  };
};
