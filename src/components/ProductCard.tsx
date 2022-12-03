import {
  DarkColor,
  PrimaryColor,
  WhiteColor,
  Yellow,
} from "../constants/color-manager";
import { StyleSheet, Text } from "react-native";

import CachedImage from "./CachedImage";
import { Div } from "react-native-magnus";
import { Icon } from "@ui-kitten/components";
import React from "react";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../lib/font-names";
import { selectAppFontFamily } from "../redux/SplashScreenReducer";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const { appFontFamily } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    })
  );
  return (
    <Div bg={WhiteColor} style={styles.card}>
      <Div>
        <CachedImage
          h={180}
          w={"100%"}
          source={{
            uri: "https://loox.com.bd/cdn-cgi/imagedelivery/IEVmOmAlrv1BxorgilY5Og/0925a88b-ebaf-4935-208f-fc48a17ec200/public540x720",
          }}
          resizeMode="cover"
          rounded={6}
        />
        <Div
          position="absolute"
          bottom={5}
          right={5}
          bg={WhiteColor}
          p={5}
          rounded={4}
        >
          <Icon
            name="shopping-cart-outline"
            fill={DarkColor}
            height={20}
            width={20}
          />
        </Div>
      </Div>
      <Div mt={8} px={10} pb={6}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[
            styles.title,
            {
              fontFamily: getFontNameType(appFontFamily, "Regular"),
              flex: 1,
              width: "100%",
            },
          ]}
        >
          Flores Jens Top Waers Blue Floral Print Top With Tie Up
        </Text>
        <Div row my={8} alignItems="flex-end">
          <Text
            style={[
              {
                fontFamily: getFontNameType(appFontFamily, "Bold"),
                fontSize: 15,
                fontWeight: "bold",
                color: PrimaryColor,
              },
            ]}
          >
            $120
          </Text>
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontNameType(appFontFamily, "Regular"),
                marginLeft: 10,
                textDecorationLine: "line-through",
                color: "#9C9C9C",
                fontWeight: "700",
              },
            ]}
          >
            $120
          </Text>
        </Div>
        <Div row alignItems="center">
          <Icon name="star" fill={Yellow} height={14} width={14} />
          <Icon name="star" fill={Yellow} height={14} width={14} />
          <Icon name="star" fill={Yellow} height={14} width={14} />
          <Icon name="star" fill={Yellow} height={14} width={14} />
          <Icon name="star-outline" fill={Yellow} height={14} width={14} />
          <Text
            style={{
              fontFamily: getFontNameType(appFontFamily, "Medium"),
              fontSize: 11,
              marginLeft: 10,
            }}
          >
            2343
          </Text>
        </Div>
      </Div>
    </Div>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: DarkColor,
  },
  card: {
    borderRadius: 6,
    // borderColor: "#E5E5E5",
    // borderWidth: 1,
  },
});
