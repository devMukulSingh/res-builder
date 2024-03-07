import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
import commonSlice from '../slice/commonSlice'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'root',
  version: 1,
  storage
}


const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    persistedReducer,
    commonSlice
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
