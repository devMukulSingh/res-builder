import { createSlice } from '@reduxjs/toolkit'

export interface IinitialState {
  progress: number
  sidebar: boolean
}

const initialState: IinitialState = {
  progress: 10,
  sidebar: true
}

const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    setProgress: state => {
      const singleProgress = Math.floor(100 / 8)
      state.progress = state.progress + singleProgress
    },
    resetProgressBar: state => {
      state.progress = 10
    },
    toggleSidebar: state => {
      state.sidebar = !state.sidebar
    }
  }
})

export default rootSlice.reducer

export const { setProgress, resetProgressBar, toggleSidebar } =
  rootSlice.actions
