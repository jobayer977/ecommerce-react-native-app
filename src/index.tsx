import * as eva from "@eva-design/eva";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, { useEffect } from "react";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider as MagnusThemeProvider } from "react-native-magnus";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { Routes } from "./routes/index";
import SplashScreen from "react-native-splash-screen";
import { default as appTheme } from "./theme/app-theme.json";
import { default as customEva } from "./theme/app-mapping-eva.json";
import { queryClient } from "./config/react-query-client";
import { rootReducers } from "./redux";
const appMappings = {
  eva: {
    mapping: eva.mapping,
    customMapping: customEva,
  },
};
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <QueryClientProvider client={queryClient}>
        <MagnusThemeProvider theme={{}}>
          <ApplicationProvider
            {...appMappings.eva}
            theme={{ ...eva.light, ...appTheme }}
          >
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <Provider store={rootReducers}>
                  <Routes />
                </Provider>
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </ApplicationProvider>
        </MagnusThemeProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
