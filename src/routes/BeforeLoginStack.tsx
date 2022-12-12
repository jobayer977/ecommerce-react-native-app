import { useDispatch, useSelector } from "react-redux";

import AboutUSScreen from "../screens/AboutUSScreen";
import AccountScreen from "../screens/dashboard/account-tab/AccountScreen";
import AddNewAddressScreen from "../screens/dashboard/account-tab/AddNewAddressScreen";
import CartScreen from "../screens/dashboard/home/CartScreen";
import CategoriesScreen from "../screens/dashboard/categories-tab/CategoriesScreen";
import CheckoutPaymentMethodScreen from "../screens/dashboard/home/CheckoutPaymentMethodScreen";
import CheckoutShippingScreen from "../screens/dashboard/home/CheckoutShippingScreen";
import DashboardScreen from "../screens/dashboard/account-tab/DashboardScreen";
import EditProfileScreen from "../screens/dashboard/account-tab/EditProfileScreen";
import HomeScreen from "../screens/dashboard/home/HomeScreen";
import ManageAddressScreen from "../screens/dashboard/account-tab/ManageAddressScreen";
import MyOrdersScreen from "../screens/dashboard/account-tab/MyOrdersScreen";
import OrderDetailsScreen from "../screens/dashboard/account-tab/OrderDetailsScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import ProductDetailsScreen from "../screens/dashboard/home/ProductDetailsScreen";
import ProductsScreen from "../screens/dashboard/home/ProductsScreen";
import ProfileScreen from "../screens/dashboard/account-tab/ProfileScreen";
import React from "react";
import SearchScreen from "../screens/dashboard/home/SearchScreen";
import SettingsScreen from "../screens/dashboard/account-tab/SettingsScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { TabBar } from "./TabBar";
import TermsOfServiceScree from "../screens/TermsOfServiceScree";
import WishListScreen from "../screens/dashboard/home/WishListScreen";
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
        <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Tab.Screen name="ContactUSScreen" component={HomeScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
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
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </Stack.Group>
        )}
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen
          name="ManageAddressScreen"
          component={ManageAddressScreen}
        />
        <Stack.Screen
          name="AddNewAddressScreen"
          component={AddNewAddressScreen}
        />
        <Stack.Screen
          name="CheckoutShippingScreen"
          component={CheckoutShippingScreen}
        />
        <Stack.Screen
          name="CheckoutPaymentMethodScreen"
          component={CheckoutPaymentMethodScreen}
        />
        <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
        <Stack.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
        />
        <Stack.Screen name="WishListScreen" component={WishListScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen
          name="TermsOfServiceScree"
          component={TermsOfServiceScree}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen name="AboutUSScreen" component={AboutUSScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </>
  );
};
export default BeforeLoginStack;
