import {
  Black,
  DarkColor,
  GrayBg,
  WhiteColor,
} from "../../../constants/color-manager";
import { Div, Image } from "react-native-magnus";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";

import { ImageAssets } from "../../../lib/assets-managers";
import SafeView from "../../../components/SafeView";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = () => {
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
      title: localizedStrings.categories,
      headerShadowVisible: false,
      headerTitleStyle: [
        styles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
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
            ml={10}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <SafeView>
        <FlatList
          data={CATEGORIES}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Div w={(deviceWidth - 20) / 3} p={5}>
              <Div style={styles.catCard} py={10} px={10}>
                <Image
                  rounded={10}
                  source={{
                    uri: item.image,
                  }}
                  h={50}
                  w={50}
                  mb={2}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.catTitle,
                    {
                      fontFamily: getFontNameType(appFontFamily, "Regular"),
                      marginTop: 10,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Div>
            </Div>
          )}
        />
      </SafeView>
    </SafeAreaView>
  );
};
export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GrayBg,
  },
  headerTitleStyle: {
    fontSize: 14,
    color: DarkColor,
  },
  catCard: {
    // width: (deviceWidth - 20) / 3,
    // margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  catTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: Black,
  },
});
const CATEGORIES = [
  {
    id: "1",
    title: "Cotton",
    image: "https://i.ibb.co/z6mYG7N/dress.png",
  },
  {
    id: "2",
    title: "Silk",
    image: "https://i.ibb.co/Q82JCVm/shirt.png",
  },
  {
    id: "3",
    title: "Linen",
    image: "https://i.ibb.co/9tJyk6z/suit.png",
  },
  {
    id: "4",
    title: "Wool",
    image: "https://i.ibb.co/vwgKPvv/winter-hat.png",
  },
  {
    id: "1",
    title: "Cotton",
    image: "https://i.ibb.co/z6mYG7N/dress.png",
  },
  {
    id: "2",
    title: "Silk",
    image: "https://i.ibb.co/Q82JCVm/shirt.png",
  },
  {
    id: "3",
    title: "Linen",
    image: "https://i.ibb.co/9tJyk6z/suit.png",
  },
  {
    id: "4",
    title: "Wool",
    image: "https://i.ibb.co/vwgKPvv/winter-hat.png",
  },
  {
    id: "1",
    title: "Cotton",
    image: "https://i.ibb.co/z6mYG7N/dress.png",
  },
  {
    id: "2",
    title: "Silk",
    image: "https://i.ibb.co/Q82JCVm/shirt.png",
  },
  {
    id: "3",
    title: "Linen",
    image: "https://i.ibb.co/9tJyk6z/suit.png",
  },
  {
    id: "4",
    title: "Wool",
    image: "https://i.ibb.co/vwgKPvv/winter-hat.png",
  },
  {
    id: "1",
    title: "Cotton",
    image: "https://i.ibb.co/z6mYG7N/dress.png",
  },
  {
    id: "2",
    title: "Silk",
    image: "https://i.ibb.co/Q82JCVm/shirt.png",
  },
  {
    id: "3",
    title: "Linen",
    image: "https://i.ibb.co/9tJyk6z/suit.png",
  },
  {
    id: "4",
    title: "Wool",
    image: "https://i.ibb.co/vwgKPvv/winter-hat.png",
  },
];
