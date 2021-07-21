import {
  ADD_CART_MODAL,
  HANDLE_CART_PREVIEW,
  HANDLE_DARK_SCREEN,
  HANDLE_HAMBURGER_MENU,
  HANDLE_LOCK_BODY,
  HANDLE_ORDER_MODAL,
} from "../constants/visibleConstants";

export const visibleReducer = (
  state = {
    showCart: false,
    showModal: false,
    lockBody: false,
    hamburgerMenu: false,
    darkScreen: false,
    showAddToCartModal: false,
  },
  action
) => {
  /**
   * all of these reducers update the boolean value in order to show special states of the front end
   */
  switch (action.type) {
    case HANDLE_ORDER_MODAL:
      return { ...state, showModal: action.payload };
    case HANDLE_LOCK_BODY:
      return { ...state, lockBody: action.payload };
    case HANDLE_CART_PREVIEW:
      return { ...state, showCart: action.payload };
    case HANDLE_HAMBURGER_MENU:
      return { ...state, hamburgerMenu: action.payload };
    case HANDLE_DARK_SCREEN:
      return { ...state, darkScreen: action.payload };
    case ADD_CART_MODAL:
      return { ...state, showAddToCartModal: action.payload };
    default:
      return state;
  }
};
