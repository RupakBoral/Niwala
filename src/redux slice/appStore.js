import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice"

// configureStore is a abstract function over createStore function
// it is used to create redux store
const appStore = configureStore({
    // single reducer, thats why reducer
    reducer: {
        // this is one slice
        cart: cartSlice,
        user: userSlice,
    },
});

export default appStore;