import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: "Rupak",
        deliveryAddress: "Chandigarh Univerity, Gate-4 NC-4",
        deliveryTime: "0 mins",
        deliveryType: "Hostel"
    },
    reducer: {

    }
})

export default userSlice.reducer;