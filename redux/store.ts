import { configureStore } from "@reduxjs/toolkit";
import showReducer from "@/redux/features/show/showSlice";
import { showApi } from "./services/show";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    show: showReducer,
    [showApi.reducerPath]: showApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(showApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {shows: ShowsState}
export type AppDispatch = typeof store.dispatch;
