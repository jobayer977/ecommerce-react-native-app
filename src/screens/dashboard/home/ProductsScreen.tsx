import {
  Black,
  DarkColor,
  GrayBg,
  PrimaryColor,
} from "../../../constants/color-manager";
import { Div, Image } from "react-native-magnus";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ImageAssets } from "../../../lib/assets-managers";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductCard from "../../../components/ProductCard";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";

const ProductsScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
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
      statusBarColor: PrimaryColor,
      title: route.params?.title || "",
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
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
      headerRight: () => (
        <Div mr={10} row>
          <Div ml={5}>
            <TouchableOpacity>
              <Ionicons name="funnel-outline" size={17} color={DarkColor} />
            </TouchableOpacity>
          </Div>
          <Div ml={15}>
            <TouchableOpacity>
              <MaterialIcons name="sort" size={17} color={DarkColor} />
            </TouchableOpacity>
          </Div>
        </Div>
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
            <Div w={(deviceWidth - 20) / 2} p={5}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductDetailsScreen", {
                    title: item.title,
                  });
                }}
              >
                <ProductCard />
              </TouchableOpacity>
            </Div>
          )}
        />
      </SafeView>
    </SafeAreaView>
  );
};
export default ProductsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GrayBg,
    paddingVertical: 10,
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
