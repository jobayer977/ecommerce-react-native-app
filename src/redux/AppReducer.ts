import { createSelector, createSlice } from "@reduxjs/toolkit";

import { GeoPosition } from "react-native-geolocation-service";

export interface IAppReducer {
  userLocation: GeoPosition | null;
}
const slice = createSlice({
  name: "AppReducer",
  initialState: {
    userLocation: null,
  } as IAppReducer,
  reducers: {
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
});
// selectors
const selectState = (state) => state.AppReducer;
export const selectUserLocation = createSelector(
  selectState,
  (state) => state.userLocation
);
export const { setUserLocation } = slice.actions;
export default slice.reducer;
