import { createSlice } from "@reduxjs/toolkit";

let item;
if (typeof window !== 'undefined') {
    item = JSON.parse(localStorage.getItem("cards") || "[]");
}

const initialState = {
    number: 0,
    data: item,
}
const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addCounter: (state, action) => {
            state.number += 1;
        },
        addData: (state, action) => {
            // console.log(action.payload);

            state.data = action.payload;
            let card = JSON.stringify(state.data);
            localStorage.setItem("cards", card);
        }
    }
})

export const { addCounter, addData } = Slice.actions;
export default Slice.reducer;