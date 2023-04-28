//createSlice = create reducer to be able to access from all of this app
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ""

//all information about reducer, action, and actial name of the state
export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue},
    reducers : {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    }    
})
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;