import { configureStore } from "@reduxjs/toolkit";
import showReducer from "@/redux/features/show/showSlice";

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {shows: ShowsState}
export type AppDispatch = typeof store.dispatch;
