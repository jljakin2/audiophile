import axios from "axios";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProductsByCategory = category => async dispatch => {
  try {
    dispatch({ type: PRODUCT_CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(`/api/products/${category}`);

    dispatch({
      type: PRODUCT_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = slug => async dispatch => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/product/${slug}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      // we need to use the [0] syntax because the api is returning an array instead of an object
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
