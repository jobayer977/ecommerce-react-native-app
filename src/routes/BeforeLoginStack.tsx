import { useDispatch, useSelector } from "react-redux";

import EnterAppScreen from "../screens/EnterAppScreen";
import HomeScreen from "../screens/dashboard/home/HomeScreen";
import React from "react";
import SignInScreen from "../screens/SignInScreen";
import { TabBar } from "./TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStructuredSelector } from "reselect";
import { selectAppFontFamily } from "../redux/SplashScreenReducer";
import { selectIsAuthenticated } from "../redux/auth.reducer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BeforeLoginStack = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { appFontFamily, isAuthenticated } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
      isAuthenticated: selectIsAuthenticated,
    })
  );
  const HomeTabStack = (): React.ReactElement => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={(v: any) => ({
          headerShown: false,
        })}
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{
          backgroundColor: "transparent",
          borderTopWidth: 0,
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="HomeNotificationScreen" component={HomeScreen} />
        <Tab.Screen name="ContactUSScreen" component={HomeScreen} />
        <Tab.Screen name="AccountScreen" component={HomeScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeTabStack" component={HomeTabStack} />
        {!isAuthenticated && (
          <Stack.Group>
            <Stack.Screen name="SignInScreenModal" component={HomeScreen} />
            <Stack.Screen name="SignUpScreenModal" component={HomeScreen} />
          </Stack.Group>
        )}
        <Stack.Screen name="PrivacyPolicyScreen" component={HomeScreen} />
        <Stack.Screen name="TermsOfServiceScree" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};
export default BeforeLoginStack;
