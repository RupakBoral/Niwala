import { createSlice } from "@reduxjs/toolkit";

// createSlice will return an object.
const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        items: [] // initially no item
    }, 
    // mutliple reduces thats why reducers
    reducers: {
        // addItem is the Dispatch Action, and the function attached to it is reducer function
        // the reducer fn will get access to the state of the slice and update according to the action
        addItem: (state, action) => {
            // mutating the state 
            state.items.push(action.payload); // adding the action to the item
        },
        removeItem: (state) => {
            state.items.pop(); // change the state of the item, by removing the last
        },
        clearCart: (state) => {
            state.items.length = 0; // this will empty the item
        }
    }
})

// cartSlice is an object, and the actions can be access by destructuring
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;