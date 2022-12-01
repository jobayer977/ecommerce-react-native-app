import * as Animatable from "react-native-animatable";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Div, Image } from "react-native-magnus";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  LightColor,
  PrimaryColor,
  WhiteColor,
} from "../constants/color-manager";
import React, { useState } from "react";
import {
  selectAppFontFamily,
  selectAppLanguage,
  setAppFontFamily,
  setAppLanguage,
} from "../redux/SplashScreenReducer";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@ui-kitten/components";
import { ImageAssets } from "../lib/assets-managers";
import SafeView from "../components/SafeView";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../lib/font-names";
import { localizedStrings } from "../lib/LocalizationStrings";
import { setLocalDate } from "../lib/app_prefs";

export const languages = [
  {
    languageName: "English",
    fontFamily: "Inter",
    languageCode: "en-US",
  },
  {
    languageName: "English UK",
    fontFamily: "NotoSansArabic",
    languageCode: "en-US",
  },
];
interface IFProps {
  onChooseLanguage: (language: any) => void;
}
const SplashScreenRoute: React.FC<IFProps> = ({ onChooseLanguage }) => {
  const [appLoading, setAppLoading] = useState(false);
  const dispatch = useDispatch();
  const { appLanguage, appFontFamily } = useSelector(
    createStructuredSelector({
      appLanguage: selectAppLanguage,
      appFontFamily: selectAppFontFamily,
    })
  );
  const onSelectLanguage = async (item) => {
    await setLocalDate("APP_LANGUAGE", item.languageCode);
    await setLocalDate("APP_FONT_FAMILY", item.fontFamily);
    dispatch(setAppFontFamily(item.fontFamily));
    dispatch(setAppLanguage(item.languageCode));
    localizedStrings.setLanguage(item.languageCode);
    onChooseLanguage(item?.languageCode);
  };
  const _languageBottomSheetView = () => {
    return (
      <BottomSheet
        snapPoints={[180]}
        enablePanDownToClose={false}
        enableOverDrag={false}
        animateOnMount={true}
        handleIndicatorStyle={{
          opacity: 0,
        }}
      >
        <BottomSheetView>
          <SafeView>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType("Inter", "Black"),
                  marginBottom: 15,
                },
              ]}
            >
              Choose Language
            </Text>
            <FlatList
              data={languages}
              renderItem={_renderLanguageRow.bind(this)}
            />
          </SafeView>
        </BottomSheetView>
      </BottomSheet>
    );
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
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: PrimaryColor,
        }}
      >
        <Div alignItems="center" row mt={-200}>
          <Animatable.Image
            source={ImageAssets.logo}
            style={{
              marginBottom: 10,
              height: 70,
              width: 70,
              marginRight: 10,
            }}
            resizeMode="contain"
            animation={{
              from: {
                opacity: 0,
                scaleX: 0.5,
              },
              to: {
                opacity: 1,
                scaleX: 1,
              },
            }}
          />
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontNameType("Inter", "Black"),
                color: WhiteColor,
              },
            ]}
          >
            BEINBUSINESS
          </Text>
        </Div>
        {(!appFontFamily || !appLanguage) && _languageBottomSheetView()}
      </View>
    </>
  );
};
export default SplashScreenRoute;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  factBox: {
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowColor: "#535AD7",
    shadowOpacity: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    padding: 24,
    margin: 24,
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    color: "#333E63",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.28,
    color: "#6E819B",
    marginBottom: 12,
  },
  langName: {
    fontSize: 14,
    color: "#203D65",
  },
});
