import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SignInScreen from "./SignInScreen";
import SplashScreen from "./SplashScreen";
import { WhiteColor } from "../lib/color-manager";

type TView = "SPLASH" | "SIGN_IN_SCREEN";
const EnterAppScreen = () => {
  const [currentView, setCurrentView] = useState<TView>("SPLASH");
  const render = (view: TView) => {
    switch (view) {
      case "SPLASH":
        return <SplashScreen />;
      case "SIGN_IN_SCREEN":
        return <SignInScreen />;
      default:
        return <View />;
    }
  };
  return <View style={styles.container}>{render(currentView)}</View>;
};
export default EnterAppScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
});
