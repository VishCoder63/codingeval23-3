import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQ,
  GET_DATA_SUCCESS,
  SORT_DATA,
} from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
  type: GET_DATA_REQ,
});

// action for get products success

export const getProductsSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

// action for get products failure

export const getProductsFailure = () => ({
  type: GET_DATA_FAILURE,
});

// thunk call to fetch products  list
export const getproductsData = () => {
  return (dispatch) => {
    dispatch(getProductsReq());
    axios
      .get("https://movie-fake-server.herokuapp.com/products")
      .then((res) => {
        // console.log(res.data);
        dispatch(getProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductsFailure());
        console.log(err);
      });
  };
};

// action object for sort  feature

export const sortProducts = (payload) => ({
  type: SORT_DATA,
  payload,
});
