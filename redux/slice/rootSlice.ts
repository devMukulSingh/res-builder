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
        setProgress : (state ) => {
            const singleProgress = Math.floor(100/8);
            state.progress = state.progress + singleProgress;
        },
    }
});


export default rootSlice.reducer;

export const { setProgress } = rootSlice.actions;

