import { combineReducers } from "redux";
import wishlist from "./wishlist.reducer";
import products from "./products.reducer";
import categories from "./categories.reducer";
import cart from "./cart.reducer";
import user from "./user.reducer";

export default combineReducers({
  wishlist,
  products,
  categories,
  cart,
  user
});
