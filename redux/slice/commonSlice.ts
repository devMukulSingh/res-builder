import { createSlice } from "@reduxjs/toolkit";


export interface IinitialState {
    sidebar: boolean,
    formComp : string | null
  }
  
  const initialState: IinitialState = {
    sidebar: true,
    formComp: "Personal Information"
  }
  

const commonSlice = createSlice({
    name:'commonSlice',
    initialState,
    reducers:{
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
          },
          setFormComp : (state,action ) => {
            state.formComp = action.payload;
          }
    }
})

export default commonSlice.reducer

export const { toggleSidebar,setFormComp } =
  commonSlice.actions
