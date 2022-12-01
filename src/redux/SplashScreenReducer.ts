import { createSelector, createSlice } from "@reduxjs/toolkit";

export interface ISplashScreenReducer {
  appFontFamily: string;
  appLanguage: string;
}
const slice = createSlice({
  name: "SplashScreenReducer",
  initialState: {
    appFontFamily: "Inter",
    appLanguage: "",
  } as ISplashScreenReducer,
  reducers: {
    setAppFontFamily(state, action) {
      state.appFontFamily = action.payload;
    },
    setAppLanguage(state, action) {
      state.appLanguage = action.payload;
    },
  },
});
// selectors
const selectState = (state) => state.SplashScreenReducer;
export const selectAppFontFamily = createSelector(
  selectState,
  (state) => state.appFontFamily
);
export const selectAppLanguage = createSelector(
  selectState,
  (state) => state.appLanguage
);
export const { setAppFontFamily, setAppLanguage } = slice.actions;
export default slice.reducer;
