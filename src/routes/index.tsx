import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { setAppFontFamily, setAppLanguage } from "../redux/SplashScreenReducer";
import { setIsAuthenticated, setTokenUser } from "../redux/auth.reducer";

import BeforeLoginStack from "./BeforeLoginStack";
import SplashScreen from "react-native-splash-screen";
import SplashScreenRoute from "../screens/SplashScreen";
import { getLocalDate } from "../lib/app_prefs";
import { localizedStrings } from "../lib/LocalizationStrings";
import { useDispatch } from "react-redux";
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export const Routes = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [isSplashScreenHide, setIsSplashScreenHide] = useState(false);
  useEffect(() => {
    checkAppSplashScreenVisibility();
    return () => {};
  }, []);
  const checkAppSplashScreenVisibility = async () => {
    try {
      const appLanguage = await getLocalDate("APP_LANGUAGE");
      const appFontFamily = await getLocalDate("APP_FONT_FAMILY");
      const user = await getLocalDate("USER");
      const isAuth = await getLocalDate("IS_AUTHENTICATED");
      if (isAuth) {
        dispatch(setTokenUser(user));
        dispatch(setIsAuthenticated(true));
      }
      if (appLanguage && appFontFamily) {
        dispatch(setAppFontFamily(appFontFamily));
        dispatch(setAppLanguage(appLanguage));
        localizedStrings.setLanguage(appLanguage);
        setTimeout(() => {
          setIsSplashScreenHide(true);
        }, 1500);
      }
      setTimeout(() => {
        SplashScreen.hide();
      }, 50);
    } catch (error) {
      SplashScreen.hide();
    }
  };
  if (!isSplashScreenHide) {
    return (
      <SplashScreenRoute
        onChooseLanguage={(lan) => {
          setIsSplashScreenHide(true);
        }}
      />
    );
  }
  return (
    <NavigationContainer theme={navigatorTheme}>
      <BeforeLoginStack />
    </NavigationContainer>
  );
};
