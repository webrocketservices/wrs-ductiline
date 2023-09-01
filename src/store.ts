import { configureStore } from "@reduxjs/toolkit";
import { firebaseApi } from "./redux/firebaseSlice";

export const setupStore = () =>
  configureStore({
    reducer: {
      [firebaseApi.reducerPath]: firebaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(firebaseApi.middleware);
    },
  });

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
