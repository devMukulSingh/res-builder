import { configureStore } from '@reduxjs/toolkit'
import rootSlice from '../slice/rootSlice'
import userSlice from '../slice/userSlice'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  userSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: {
    rootSlice,
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
