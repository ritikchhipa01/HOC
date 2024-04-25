
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    number: 0,
    data: [],
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
        }
    }
})

export const { addCounter, addData } = Slice.actions;
export default Slice.reducer;