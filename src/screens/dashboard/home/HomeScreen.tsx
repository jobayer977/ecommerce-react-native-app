import { Div, Image } from "react-native-magnus";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PrimaryColor, WhiteColor } from "../../../constants/color-manager";
import React, { useEffect } from "react";

import Carousel from "react-native-reanimated-carousel";
import { Icon } from "@ui-kitten/components";
import { ImageAssets } from "../../../lib/assets-managers";
import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import SafeView from "../../../components/SafeView";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { appFontFamily } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    })
  );
  useEffect(() => {
    configureHeader();
  }, []);
  const configureHeader = () => {
    navigation.setOptions({
      headerShown: true,
      statusBarColor: PrimaryColor,
      title: "Xincho",
      headerLeft: () => (
        <Div ml={10}>
          <Image
            source={ImageAssets.logoPrimaryColor}
            h={35}
            w={35}
            resizeMode="contain"
          />
        </Div>
      ),
      headerRight: () => (
        <Div mr={10} row>
          <Div ml={5}>
            <TouchableOpacity>
              <Icon
                name="search-outline"
                fill={PrimaryColor}
                width={24}
                height={24}
              />
            </TouchableOpacity>
          </Div>
          <Div ml={10}>
            <TouchableOpacity>
              <Icon
                name="shopping-cart-outline"
                fill={PrimaryColor}
                width={24}
                height={24}
              />
            </TouchableOpacity>
          </Div>
        </Div>
      ),
      headerStyle: {
        backgroundColor: WhiteColor,
      },
      headerTitleStyle: {
        fontSize: 22,
        fontweight: "bold",
      },
    });
  };
  var sliderImages = [
    "https://i.ibb.co/JjKWK1v/d.webp",
    "https://i.ibb.co/ZJgXhwj/m1.webp",
    "https://img.freepik.com/free-psd/ramadan-sale-banner-template_106244-2040.jpg?t=st=1653929841~exp=1653930441~hmac=4e5ed0a9d90f49ca2ecb4b67f1eb91158f43d50d0ee8ffc1e5cf17ed6465a2d7&w=900",
  ];
  return (
    <>
      <View style={styles.container}>
        <PullToRefreshScroll>
          <SafeView>
            <FlatList
              horizontal
              data={CATEGORIES}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Div style={styles.catCard} mr={5} p={5}>
                  <Image
                    rounded={10}
                    source={{
                      uri: item.image,
                    }}
                    h={40}
                    w={"100%"}
                    mb={3}
                    flex={1}
                    resizeMode="cover"
                  />
                  <Text
                    style={[
                      styles.catTitle,
                      {
                        fontFamily: getFontNameType(appFontFamily, "Regular"),
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </Div>
              )}
            />
          </SafeView>
          <Carousel
            vertical
            loop
            style={{ marginVertical: 16 }}
            snapEnabled
            width={deviceWidth}
            height={deviceWidth / 2}
            autoPlay={true}
            data={sliderImages}
            scrollAnimationDuration={1000}
            autoPlayInterval={6000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <Div w={deviceWidth} px={10}>
                <Image
                  rounded={10}
                  source={{ uri: sliderImages[index] }}
                  h={deviceWidth / 2}
                  w={deviceWidth - 20}
                  resizeMode="cover"
                />
              </Div>
            )}
          />
        </PullToRefreshScroll>
      </View>
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  catCard: {
    width: deviceWidth / 4.4,
    height: 100,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  catTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#828282",
  },
});
// 20 Fabrics categories with images
const CATEGORIES = [
  {
    id: "1",
    title: "Cotton",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Silk",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Linen",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Wool",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    title: "Cashmere",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    title: "Cotton",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    title: "Silk",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    title: "Linen",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "9",
    title: "Wool",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "10",
    title: "Cashmere",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "11",
    title: "Cotton",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "12",
    title: "Silk",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "13",
    title: "Linen",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "14",
    title: "Wool",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "15",
    title: "Cashmere",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "16",
    title: "Cotton",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "17",
    title: "Silk",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "18",
    title: "Linen",
    image: "https://via.placeholder.com/150",
  },
];
