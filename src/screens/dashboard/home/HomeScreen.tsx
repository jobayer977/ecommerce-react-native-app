import { Div, Image } from "react-native-magnus";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GrayBg,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import React, { useEffect } from "react";

import BaseTitle from "../../../components/BaseTitle";
import CachedImage from "../../../components/CachedImage";
import Carousel from "react-native-reanimated-carousel";
import { Icon } from "@ui-kitten/components";
import { ImageAssets } from "../../../lib/assets-managers";
import ProductCard from "../../../components/ProductCard";
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
        backgroundColor: "#F8F8F8",
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
                <Div style={styles.catCard} mr={5} py={5} px={5}>
                  <Image
                    rounded={10}
                    source={{
                      uri: item.image,
                    }}
                    h={40}
                    w={40}
                    mb={2}
                    resizeMode="contain"
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
          <SafeView mb={10}>
            <BaseTitle title="Deals of the Day" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Customer's Choices" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Top Categories" />
            <FlatList
              data={[
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/e05cfb8a-e706-4269-be37-0cfcb5084000/public270x360",
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/af6dfe2e-9957-4317-5a75-25fee0e4b500/public270x360",
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/716a1fa1-4825-45b3-a504-3741aae9fb00/public270x360",
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/1511c761-05c2-48b2-778a-a60eea252200/public270x360",
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/5d7edc53-16db-4332-31cc-e7fd443c7100/public270x360",
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/e06ec0a3-ea48-4276-5779-fbb772c53500/public270x360",
                "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/cce03b4f-97ac-4b3c-4c99-8f8f7ab02d00/public270x360",
              ]}
              numColumns={4}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              ItemSeparatorComponent={() => <Div p={5} />}
              renderItem={({ item }) => (
                <CachedImage
                  source={{
                    uri: item,
                  }}
                  h={80}
                  w={deviceWidth / 4.5}
                  resizeMode="cover"
                />
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Customer's Choices" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Customer's Choices" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Customer's Choices" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Customer's Choices" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
          <SafeView mb={10}>
            <BaseTitle title="Customer's Choices" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 4, 5, 5, 5]}
              renderItem={({ item }) => (
                <Div w={deviceWidth / 2.3} mr={10}>
                  <ProductCard />
                </Div>
              )}
            />
          </SafeView>
        </PullToRefreshScroll>
      </View>
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GrayBg,
    paddingTop: 10,
    paddingBottom: 20,
  },
  catCard: {
    width: deviceWidth / 4.4,
    backgroundColor: "#fff",
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
