import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
    sidebar: boolean
  }
  
  const initialState: IinitialState = {
    sidebar: true
  }
  

const commonSlice = createSlice({
    name:'commonSlice',
    initialState,
    reducers:{
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
          }
    }
})

export default commonSlice.reducer

export const { toggleSidebar } =
  commonSlice.actions
