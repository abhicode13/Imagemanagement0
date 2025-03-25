
import { configureStore } from '@reduxjs/toolkit';
import cardLibraryReducer from "./Cardslice";

export const store = configureStore({
  reducer: {
    cardLibrary: cardLibraryReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




