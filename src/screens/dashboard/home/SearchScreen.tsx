import {
  DarkColor,
  FLashGray,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import { Div, Image, Text } from "react-native-magnus";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon, Input } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CommingSoonScreen from "../../CommingSoonScreen";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useNavigation } from "@react-navigation/native";
const SearchScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { appFontFamily } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    })
  );
  useEffect(() => {
    configureHeader();
    return () => {};
  }, []);
  const configureHeader = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };
  const PRODUCTS = [
    {
      id: 1,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat1.png"),
    },
    {
      id: 2,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat2.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat3.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat4.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat5.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat6.png"),
    },
    {
      id: 1,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat1.png"),
    },
    {
      id: 2,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat2.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat3.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat4.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat5.png"),
    },
    {
      id: 3,
      name: localizedStrings.productOne,
      price: 100,
      image: require("../../../assets/images/cat6.png"),
    },
  ];
  const _renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductScreen");
        }}
        style={{
          padding: 8,
          flex: 1,
        }}
      >
        <Div
          bg={WhiteColor}
          rounded="lg"
          style={{
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={item.image} h={130} w={130} resizeMode="contain" />
          <Div>
            <Text
              style={{
                fontFamily: getFontNameType(appFontFamily, "Regular"),
                fontSize: 14,
                color: DarkColor,
                marginTop: 8,
                textAlign: "left",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: getFontNameType(appFontFamily, "Bold"),
                fontSize: 16,
                color: PrimaryColor,
                textAlign: "left",
                lineHeight: 24,
              }}
            >
              {item.price}{" "}
            </Text>
          </Div>
        </Div>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Div bg={PrimaryColor} p={16} pb={45}>
        <Input
          size="large"
          placeholder={localizedStrings.search}
          style={{
            borderWidth: 0,
          }}
          accessoryLeft={(props) => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon
                {...props}
                fill={"#A7B4CC"}
                name={"arrow-ios-back-outline"}
                style={{
                  height: 32,
                  width: 32,
                }}
              />
            </TouchableOpacity>
          )}
          accessoryRight={(props) => (
            <TouchableWithoutFeedback onPress={() => {}}>
              <Icon
                style={{
                  height: 32,
                  width: 32,
                }}
                fill={"#A7B4CC"}
                {...props}
                name={"search-outline"}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </Div>
      <Div
        mt={-25}
        mb={130}
        overflow="hidden"
        bg={WhiteColor}
        roundedTopLeft={20}
        roundedTopRight={20}
      >
        <FlatList
          data={PRODUCTS}
          renderItem={_renderItem.bind(this)}
          numColumns={2}
        />
      </Div>
    </SafeAreaView>
  );
};
export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FLashGray,
  },
  title: {
    fontSize: 14,
    color: "#2C3A42",
  },
  price: {
    fontSize: 12,
    color: "#87939A",
  },
});
