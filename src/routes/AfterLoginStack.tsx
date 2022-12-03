import AccountScreen from "../screens/dashboard/account-tab/AccountScreen";
import HomeScreen from "../screens/dashboard/home/HomeScreen";
import React from "react";
import { TabBar } from "./TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AfterLoginStack = (): React.ReactElement => {
  const HomeTabStack = (): React.ReactElement => {
    return (
      <Tab.Navigator
        screenOptions={(v: any) => ({
          headerShown: false,
        })}
        initialRouteName={"Status"}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Status" component={HomeScreen} />
        <Tab.Screen name="DeliveriesScreen" component={HomeScreen} />
        <Tab.Screen name="Map" component={HomeScreen} />
        <Tab.Screen name="History" component={HomeScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeTabStack} />
      <Stack.Screen name="EditAccountScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default AfterLoginStack;
