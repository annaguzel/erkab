import {
  UPDATE_ADDRESS,
  GET_SCHOOL,
  ADD_CHILD,
  GET_CHILDREN,
} from "./actionTypes";

import instance from "./instance";

export const addChild = (child, schoolID, history) => async (dispatch) => {
  try {
    const res = await instance.post(`/add/child/${schoolID}/`, child);
    const newChild = res.data;
    dispatch({
      type: ADD_CHILD,
      payload: newChild,
    });
    history.push("/dashboard");
  } catch (error) {
    console.error(error);
    console.error(error.response.data);
  }
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

export const fetchChildren = () => async (dispatch) => {
  try {
    const res = await instance.get(`/children/`);
    const children = res.data;
    dispatch({
      type: GET_CHILDREN,
      payload: children,
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
