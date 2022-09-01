import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../Api/usersApi";

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(usersApi.middleware),
});
