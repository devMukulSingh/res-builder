import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState{
    progress:number,
}

const initialState:IinitialState = {
    progress:10,

}

const rootSlice = createSlice({
    name:'rootSlice',
    initialState,
    reducers:{
        setProgress : (state,action ) => {
            state.progress = action.payload;
        },
    }
});


export default rootSlice.reducer;

export const { setProgress } = rootSlice.actions;

