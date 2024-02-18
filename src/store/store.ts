import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { dashboardApi } from ".";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      dashboardApi.middleware
    ),
});

export type TDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
