import { ADD_ADDRESS, UPDATE_ADDRESS, GET_SCHOOL } from "./actionTypes";

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

export const fetchSchools = () => async (dispatch) => {
  try {
    const res = await instance.get(`/schools/`);
    const schools = res.data;
    dispatch({
      type: GET_SCHOOL,
      payload: schools,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateAddress = (addressID, position) => async (dispatch) => {
  try {
    const res = await instance.put(`/address/${addressID}/update/`, position);
    const newAddress = res.data;
    dispatch({
      type: UPDATE_ADDRESS,
      payload: newAddress,
    });
  } catch (error) {
    console.error(error);
  }
};
