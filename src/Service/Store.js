import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Service/Slice'
const Store = configureStore({
  // abhi slice me koi bhi code nhi h so for now reducer is empty..
  reducer:{
    cart:cartReducer
  }
})
export default Store;