import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/user";
import { listenerApi } from "../services/listener";
import { authApi } from "../services/auth";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [listenerApi.reducerPath]: listenerApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware , listenerApi.middleware,authApi.middleware]),
  
});

setupListeners(store.dispatch);
