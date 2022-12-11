import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Div, Image } from "react-native-magnus";
import {
  FLashGray,
  LightColor,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import {
  FlatList,
  I18nManager,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  selectAppFontFamily,
  selectAppLanguage,
  setAppFontFamily,
  setAppLanguage,
} from "../../../redux/SplashScreenReducer";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";

import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { Icon } from "@ui-kitten/components";
import { ImageAssets } from "../../../lib/assets-managers";
import RNRestart from "react-native-restart";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { languages } from "../../SplashScreen";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { setLocalDate } from "../../../lib/app_prefs";
import { useNavigation } from "@react-navigation/native";
const SettingsScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { appFontFamily, appLanguage, tokenUser, isAuth } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
      appLanguage: selectAppLanguage,
      tokenUser: selectTokenUser,
      isAuth: selectIsAuthenticated,
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
      statusBarStyle: "dark",
      title: localizedStrings.settings,
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        {
          fontFamily: getFontNameType(appFontFamily, "Bold"),
          paddingLeft: 10,
        },
      ],
      headerTitleAlign: "center",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={ImageAssets.black_back}
            h={32}
            w={32}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    });
  };
  const sheetRef = useRef<BottomSheetModal>(null);
  const [setUpFingurPrint, setSetUpFingurPrint] = useState(false);
  const onSelectLanguage = async (item: any) => {
    await setLocalDate("APP_LANGUAGE", item.languageCode);
    await setLocalDate("APP_FONT_FAMILY", item.fontFamily);
    dispatch(setAppFontFamily(item.fontFamily));
    dispatch(setAppLanguage(item.languageCode));
    localizedStrings.setLanguage(item.languageCode);
    if (item.languageCode === "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
    RNRestart.Restart();
  };
  const _renderLanguageRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onSelectLanguage(item)}>
        <Div row justifyContent="space-between" alignItems="center" py={8}>
          <Text
            style={[
              styles.langName,
              {
                fontFamily: getFontNameType("Inter", "Regular"),
                color:
                  appLanguage === item.languageCode ? PrimaryColor : LightColor,
              },
            ]}
          >
            {item.languageName}
          </Text>
          <Icon
            name="checkmark-outline"
            fill={appLanguage === item?.languageCode ? PrimaryColor : "#E5E5E5"}
            style={{ height: 20, width: 20 }}
          />
        </Div>
      </TouchableOpacity>
    );
  };
  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );
  const _languageBottomSheetView = () => {
    return (
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={sheetRef}
        index={1}
        snapPoints={[180, 200]}
      >
        <SafeView>
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontNameType(appFontFamily, "Black"),
                marginBottom: 15,
              },
            ]}
          >
            {localizedStrings.chooseYourLanguage}
          </Text>
          <FlatList
            data={languages}
            renderItem={_renderLanguageRow.bind(this)}
          />
        </SafeView>
      </BottomSheetModal>
    );
  };
  const currentLanguage = languages.find(
    (item) => item.languageCode === appLanguage
  );
  return (
    <SafeAreaView style={styles.container}>
      <SafeView>
        <TouchableOpacity
          onPress={() => {
            sheetRef.current?.present();
          }}
        >
          <Div
            style={styles.item}
            row
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Medium"),
                },
              ]}
            >
              {localizedStrings.language}
            </Text>
            <Div row alignItems="center">
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Medium"),
                    color: PrimaryColor,
                  },
                ]}
              >
                {currentLanguage?.languageName}
              </Text>
              <Image
                ml={25}
                source={ImageAssets.arrowRight}
                h={14}
                w={14}
                resizeMode="contain"
              />
            </Div>
          </Div>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Div
            style={styles.item}
            row
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Medium"),
                },
              ]}
            >
              {localizedStrings.fingerPrint}
            </Text>
            <Div row alignItems="center">
              <Switch
                trackColor={
                  setUpFingurPrint
                    ? { false: "#87939A", true: PrimaryColor }
                    : { false: "#87939A", true: PrimaryColor }
                }
                thumbColor={setUpFingurPrint ? WhiteColor : WhiteColor}
                ios_backgroundColor={"#87939A"}
                onValueChange={() => setSetUpFingurPrint(!setUpFingurPrint)}
                value={setUpFingurPrint}
              />
            </Div>
          </Div>
        </TouchableOpacity>
      </SafeView>
      {_languageBottomSheetView()}
    </SafeAreaView>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FLashGray,
  },
  item: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    height: 62,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    color: "#2C3A42",
  },
  langName: {
    fontSize: 14,
    color: "#203D65",
  },
});
