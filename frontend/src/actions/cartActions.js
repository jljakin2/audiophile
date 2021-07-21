import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_UPDATE,
  CART_REMOVE_ALL_ITEMS,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants";

export const addToCart = (itemSlug, itemQty) => async (dispatch, getState) => {
  // call our api to get the product information
  const { data } = await axios.get(`/api/products/product/${itemSlug}`);

  // dispatch the payload to the add item reducer. we don't need all items from the product
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data[0]._id,
      slug: data[0].slug,
      name: data[0].name,
      image: data[0].gallery.cart,
      price: data[0].price,
      qty: itemQty,
    },
  });

  // save cart items to local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = slug => (dispatch, getState) => {
  // dispatch product slug to remove item cart
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: slug,
  });

  // remove item from local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeAllItemsFromCart = () => (dispatch, getState) => {
  // reset cart state to remove all items
  dispatch({
    type: CART_REMOVE_ALL_ITEMS,
    payload: [],
  });

  // remove all items from local storage
  localStorage.removeItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

export const updateCart =
  (itemSlug, itemQty, isReduce = false) =>
  (dispatch, getState) => {
    // find all cart items
    const cartItems = getState().cart.cartItems;
    // search through cart items and find the product that is being updated
    const currentItem = cartItems.find(item => item.slug === itemSlug);

    // isReduce is needed because we need to know if the action is reducing or adding to the total quantity count to
    // rigger the proper aspect of the reducer
    dispatch({
      type: CART_UPDATE,
      payload: {
        currentItem,
        itemQty,
        isReduce,
      },
    });
  };
