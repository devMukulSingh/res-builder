import { IinitialState } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:IinitialState = {
    progress:0
}

const rootSlice = createSlice({
    name:'rootSlice',
    initialState,
    reducers:{
        setProgress : (state,action ) => {
            state.progress = action.payload;
        }
    }
});


export default rootSlice.reducer;

export const { setProgress } = rootSlice.actions;

