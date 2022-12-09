import {
  Alert,
  Image,
  Linking,
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DarkColor,
  LightColor,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import { Div, ScrollDiv } from "react-native-magnus";
import React, { useEffect, useState } from "react";
import { clearLocalData, setLocalDate } from "../../../lib/app_prefs";
import {
  selectIsAuthenticated,
  selectTokenUser,
  setIsAuthenticated,
  setTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@ui-kitten/components";
import { ImageAssets } from "../../../lib/assets-managers";
import LoaderAnimation from "../../../components/LoaderAnimation";
import RNRestart from "react-native-restart";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useNavigation } from "@react-navigation/native";
const AccountScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { appFontFamily, isAuthenticated, tokenUser } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
      isAuthenticated: selectIsAuthenticated,
      tokenUser: selectTokenUser,
    })
  );
  useEffect(() => {
    configureHeader();
    return () => {};
  }, []);
  const configureHeader = () => {
    navigation.setOptions({
      headerShown: true,
      statusBarColor: WhiteColor,
      title: localizedStrings.myAccount,
      headerShadowVisible: false,
      headerTitleStyle: [
        styles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
      ],
      headerTitleAlign: "center",
    });
  };
  const onLogout = async () => {
    Alert.alert(
      localizedStrings.areYouSureYouWantToLogout,
      localizedStrings.ifYouLogoutYouWillNotBeAbleToReceiveAnyNotifications,
      [
        {
          text: localizedStrings.cancel,
          onPress: () => null,
          style: "cancel",
        },
        {
          text: localizedStrings.ok,
          onPress: async () => {
            await clearLocalData();
            await setLocalDate("IS_AUTHENTICATED", false);
            dispatch(setIsAuthenticated(false));
            dispatch(setTokenUser(null));
            RNRestart.Restart();
          },
        },
      ]
    );
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Download the app from here",
        url: "https://mdm.ps/",
        title: "Yafa Industries Equipment",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollDiv showsVerticalScrollIndicator={false}>
          <Div px={16}>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                if (isAuthenticated) {
                  navigation.navigate("ProfileScreen");
                } else {
                  navigation.navigate("SignInScreen", {
                    toScreen: "ProfileScreen",
                    fromScreen: "AccountScreen",
                  });
                }
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image
                  source={ImageAssets.profileIcon}
                  style={styles.leftIcon}
                />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {isAuthenticated
                    ? localizedStrings.myProfile
                    : localizedStrings.signInToYourAccount}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {isAuthenticated
                    ? localizedStrings.viewAndEditYourProfile
                    : localizedStrings.setUpYourAccount}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("MyOrdersScreen");
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image
                  source={ImageAssets.profileIcon}
                  style={styles.leftIcon}
                />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.myOrders}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.viewYourOrders}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("NotificationScreen");
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image source={ImageAssets.bell} style={styles.leftIcon} />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.notifications}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.manageYourNotifications}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("ManageAddressScreen");
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image source={ImageAssets.bell} style={styles.leftIcon} />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.manageAddress}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.manageYourAddress}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("CartScreen");
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image
                  source={ImageAssets.profileIcon}
                  style={styles.leftIcon}
                />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.carts}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.viewYourCart}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                onShare();
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image source={ImageAssets.Referal} style={styles.leftIcon} />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.inviteFriends}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.inviteYourFriendsToJoin}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image source={ImageAssets.Referal} style={styles.leftIcon} />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.rateUs}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.rateUsOnTheAppStore}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("SettingsScreen");
              }}
            >
              <View style={[styles.leftButtonContainer]}>
                <Image
                  source={ImageAssets.profileIcon}
                  style={styles.leftIcon}
                />
              </View>
              <View style={styles.centerContainer}>
                <Text
                  style={[
                    styles.buttonTitle,
                    { fontFamily: getFontNameType(appFontFamily, "Bold") },
                  ]}
                >
                  {localizedStrings.settings}
                </Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { fontFamily: getFontNameType(appFontFamily, "Regular") },
                  ]}
                >
                  {localizedStrings.manageYourSettings}
                </Text>
              </View>
              <View style={[styles.leftButtonContainer, { marginRight: 15 }]}>
                <Image
                  source={ImageAssets.black_back}
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item.title}
              renderItem={renderItem.bind(this)}
              style={{ minHeight: deviceHeight - 250 }}
            /> */}
            <View style={styles.bottomContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://mdm.ps/");
                  }}
                >
                  <Text style={{ color: PrimaryColor }}>
                    {localizedStrings.termsOfService}
                  </Text>
                </TouchableOpacity>
                <Text>{"  |  "}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AboutUSScreen");
                  }}
                >
                  <Text style={{ color: PrimaryColor }}>
                    {localizedStrings.aboutUs}
                  </Text>
                </TouchableOpacity>
              </View>
              {isAuthenticated ? (
                <Button appearance="ghost" onPress={onLogout} status="basic">
                  {localizedStrings.signOut}
                </Button>
              ) : null}
              <Text
                style={[
                  styles.appVersionText,
                  { fontFamily: getFontNameType(appFontFamily, "Regular") },
                ]}
              >
                {"v. " + 0.1}
              </Text>
            </View>
          </Div>
        </ScrollDiv>
      </SafeAreaView>
      {appLoading && <LoaderAnimation />}
    </>
  );
};
export default AccountScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  headerTitleStyle: {
    fontSize: 14,
    color: DarkColor,
  },
  myAccountContainer: {
    flex: 1,
    alignContent: "center",
    width: deviceWidth - 50,
  },
  avtarContainer: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  avtarImage: {
    height: 80,
    width: 80,
    resizeMode: "contain",
    marginBottom: 25,
  },
  nameText: {
    fontSize: 24,
    color: DarkColor,
  },
  editProfileText: {
    fontSize: 12,
    color: DarkColor,
    textDecorationLine: "underline",
  },
  menuContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  leftButtonContainer: {
    height: 36,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  leftIcon: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    // tintColor: PrimaryColor,
  },
  rightIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  centerContainer: {
    flex: 1,
    margin: 15,
  },
  buttonTitle: {
    color: DarkColor,
    fontSize: 14,
  },
  descriptionText: {
    color: LightColor,
    fontSize: 12,
  },
  navigationBackIcon: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },
  appVersionText: {
    alignSelf: "center",
    color: LightColor,
    fontSize: 14,
  },
  rightSideText: {
    marginRight: 15,
    fontSize: 12,
    color: LightColor,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  bottomText: {
    width: deviceWidth - 50,
    fontSize: 14,
    color: LightColor,
    textAlign: "center",
  },
});
