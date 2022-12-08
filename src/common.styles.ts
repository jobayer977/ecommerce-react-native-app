import { DarkColor, GrayBg } from "./constants/color-manager";

import { StyleSheet } from "react-native";
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GrayBg,
  },
  headerTitleStyle: {
    fontSize: 14,
    color: DarkColor,
  },
  navigationBackIcon: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },
  borderRadius: {
    borderRadius: 16,
  },
});
