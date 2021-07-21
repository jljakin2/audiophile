import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // necessary to use the redux dev tools extension in chrome

// bring in all reducers
import {
  productCategoryListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer } from "./reducers/orderReducers";
import { visibleReducer } from "./reducers/visibleReducers";

// combine all reducers
const reducer = combineReducers({
  productCategoryList: productCategoryListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  order: orderCreateReducer,
  visible: visibleReducer,
});

// check localstorage for existing cart items. these will eventually be added to the initial state so the user doesn't lose their items
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// is there any initial state needed? is there anything in the localstorage that is needed?
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

// needed for all api calls and any async/await syntax
const middleware = [thunk];

// take all of the info above and create our redux store so we can use it in our components
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
