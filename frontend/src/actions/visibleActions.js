import {
  HANDLE_LOCK_BODY,
  HANDLE_CART_PREVIEW,
  HANDLE_ORDER_MODAL,
  HANDLE_HAMBURGER_MENU,
  HANDLE_DARK_SCREEN,
  ADD_CART_MODAL,
} from "../constants/visibleConstants";

// all actions inverse the current state. these actions are needed in
// order to allow all components to affect various special states within the app

export const handleCartPreview = currentState => {
  return {
    type: HANDLE_CART_PREVIEW,
    payload: !currentState,
  };
};

export const handleOrderModal = currentState => {
  return {
    type: HANDLE_ORDER_MODAL,
    payload: !currentState,
  };
};

export const handleLockBody = currentState => {
  return {
    type: HANDLE_LOCK_BODY,
    payload: !currentState,
  };
};

export const handleHamburgerMenu = currentState => {
  return {
    type: HANDLE_HAMBURGER_MENU,
    payload: !currentState,
  };
};

export const handleDarkScreen = currentState => {
  return {
    type: HANDLE_DARK_SCREEN,
    payload: !currentState,
  };
};

export const handleAddToCartModal = currentState => {
  return {
    type: ADD_CART_MODAL,
    payload: !currentState,
  };
};
