import AuthReducer, { IAuthReducer } from "./auth.reducer";
import SplashScreenReducer, {
  ISplashScreenReducer,
} from "./SplashScreenReducer";

import { configureStore } from "@reduxjs/toolkit";
export interface IRooReducers {
  SplashScreenReducer: ISplashScreenReducer;
  AuthReducer: IAuthReducer;
}
export const rootReducers = configureStore({
  reducer: {
    SplashScreenReducer: SplashScreenReducer,
    AuthReducer: AuthReducer,
  },
});
