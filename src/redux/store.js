import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./features/auth/signinSlice";
import loadingReducer from "../redux/features/home/loadingSilce";
const rootReducer = {
  signin: signinReducer,
  loading: loadingReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
