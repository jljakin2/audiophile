import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
  CART_UPDATE,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      let clickedItem = action.payload;

      // check to see if the clicked item is already in the cart. the "find" method will return the full product, not a boolean
      const existItem = state.cartItems.find(
        existingItem => existingItem.slug === clickedItem.slug
      );

      // if the item exist we want to update the quantity for the existing product
      // we will then take the new quantity and update the product in the cart to maintain consistency in the data
      if (existItem) {
        const newQty = existItem.qty + clickedItem.qty;
        clickedItem.qty = newQty;

        // we then will return the cartItems with the updated product and product quantity. by using the map statement we can quickly find
        // the product that matches the updated product and swap it for the updated version.
        return {
          ...state,
          cartItems: state.cartItems.map(itemInCart =>
            itemInCart.slug === existItem.slug ? clickedItem : itemInCart
          ),
        };
      } else {
        // otherwise, if the product isn't already in the cart, we simply add the product and quantity to the cartItems state
        return {
          ...state,
          cartItems: [...state.cartItems, clickedItem],
        };
      }

    case CART_REMOVE_ITEM:
      // find the item that was clicked and filter it out of the clickItems state
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.slug !== action.payload
        ),
      };

    case CART_REMOVE_ALL_ITEMS:
      // we will reset the cartItems state in order to remove all elements. the action.payload will be an empty array
      return {
        ...state,
        cartItems: action.payload,
      };

    case CART_UPDATE:
      const itemQty = action.payload.itemQty;
      const currentItem = action.payload.currentItem;

      // if the user is trying to reduce the quantity in the cart, we want to make sure they can't go under 1. otherwise, they can just delete the item
      // the isReduce is coming from the action as a boolean
      if (action.payload.isReduce) {
        currentItem.qty = itemQty === 1 ? 1 : itemQty - 1;
        // otherwise, we simply add to the existing quantity
      } else {
        currentItem.qty = itemQty + 1;
      }

      // return the updated cartItems by using the map statement to find the existing cart item and replacing it with the updated item and quantity
      return {
        ...state,
        cartItems: state.cartItems.map(itemInCart =>
          itemInCart.slug === currentItem.slug ? currentItem : itemInCart
        ),
      };

    default:
      return state;
  }
};
