import { createSelector, createSlice } from "@reduxjs/toolkit";
export interface IAuthReducer {
  user: any;
  isAuthenticated: boolean;
}
const slice = createSlice({
  name: "AuthReducer",
  initialState: {
    user: null,
    isAuthenticated: false,
  } as IAuthReducer,
  reducers: {
    setTokenUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});
// selectors
const selectState = (state) => state.AuthReducer;
export const selectTokenUser = createSelector(
  selectState,
  (state) => state.user
);
export const selectIsAuthenticated = createSelector(
  selectState,
  (state) => state.isAuthenticated
);

export const { setTokenUser, setIsAuthenticated } = slice.actions;
export default slice.reducer;
