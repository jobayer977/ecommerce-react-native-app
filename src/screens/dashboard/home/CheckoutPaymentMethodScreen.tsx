import {
  Black,
  DarkColor,
  GrayLightColor,
  LightGray,
  PrimaryColor,
} from "../../../constants/color-manager";
import { Button, Radio } from "@ui-kitten/components";
import { Div, Image } from "react-native-magnus";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";

const CheckoutPaymentMethodScreen = () => {
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
      title: route.params?.title || localizedStrings.checkout,
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
      ],
      headerTitleAlign: "center",
    });
  };
  const PAYMENTS_METHODS = [
    {
      id: 1,
      name: "Cash on Delivery",
      description: "Pay with cash upon delivery",
      icon: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      id: 2,
      name: "Credit Card",
      description: "Pay with credit card",
      icon: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  ];
  const CART_ITEMS = [
    {
      id: 1,
      name: "Smartphone 1",
      description: "Smartphone 1",
      price: 100,
      quantity: 1,
      image: "https://via.placeholder.com/250",
      subTotal: 100,
    },
    {
      id: 1,
      name: "Smartphone 1",
      description: "Smartphone 1",
      price: 100,
      quantity: 1,
      image: "https://via.placeholder.com/250",
      subTotal: 100,
    },
  ];
  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        {
          paddingBottom: 120,
        },
      ]}
    >
      <PullToRefreshScroll>
        <Div style={styles.card}>
          <Div style={styles.cardHeader}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Bold"),
                  fontSize: 14,
                  fontWeight: "bold",
                },
              ]}
            >
              Payment Methods
            </Text>
          </Div>
          <Div mt={10} bg="white">
            <FlatList
              data={PAYMENTS_METHODS}
              ItemSeparatorComponent={() => <Div h={10} />}
              renderItem={({ item }) => (
                <Div row py={8} px={16}>
                  <Div row alignItems="center" flex={1}>
                    <Div mr={15}>
                      <Image
                        source={{
                          uri: item.icon,
                        }}
                        w={25}
                        h={25}
                        rounded={5}
                      />
                    </Div>
                    <Div>
                      <Text
                        style={[
                          styles.title,
                          {
                            fontFamily: getFontNameType(
                              appFontFamily,
                              "Medium"
                            ),
                            fontWeight: "500",
                            fontSize: 14,
                            color: Black,
                          },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.title,
                          {
                            fontFamily: getFontNameType(
                              appFontFamily,
                              "Medium"
                            ),
                            fontWeight: "500",
                            fontSize: 14,
                            color: GrayLightColor,
                          },
                        ]}
                      >
                        {item.description}
                      </Text>
                    </Div>
                  </Div>
                  <Radio></Radio>
                </Div>
              )}
            />
          </Div>
        </Div>
        <Div style={styles.card}>
          <Div style={styles.cardHeader}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Bold"),
                  fontSize: 14,
                  fontWeight: "bold",
                },
              ]}
            >
              Order Summary
            </Text>
          </Div>
          <Div mt={10} bg="white">
            <FlatList
              data={CART_ITEMS}
              ItemSeparatorComponent={() => <Div h={10} />}
              renderItem={({ item }) => (
                <Div row py={8} px={16}>
                  <Div row alignItems="center" flex={1}>
                    <Div mr={15}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        w={50}
                        h={50}
                        rounded={5}
                      />
                    </Div>
                    <Div>
                      <Text
                        style={[
                          styles.title,
                          {
                            fontFamily: getFontNameType(
                              appFontFamily,
                              "Medium"
                            ),
                            fontWeight: "500",
                            fontSize: 14,
                            color: Black,
                          },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Div row>
                        <Text
                          style={[
                            styles.title,
                            {
                              fontFamily: getFontNameType(
                                appFontFamily,
                                "Medium"
                              ),
                              fontWeight: "500",
                              fontSize: 14,
                              color: GrayLightColor,
                            },
                          ]}
                        >
                          {item.price} x {item.quantity}
                        </Text>
                        <Text
                          style={[
                            styles.title,
                            {
                              fontFamily: getFontNameType(
                                appFontFamily,
                                "Medium"
                              ),
                              fontWeight: "500",
                              fontSize: 14,
                              color: GrayLightColor,
                              marginLeft: 15,
                            },
                          ]}
                        >
                          SubTotal: {item.subTotal}
                        </Text>
                      </Div>
                    </Div>
                  </Div>
                </Div>
              )}
            />
          </Div>
        </Div>
        <Div style={styles.card}>
          <Div style={styles.cardHeader}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Bold"),
                  fontSize: 14,
                  fontWeight: "bold",
                },
              ]}
            >
              Order Summary
            </Text>
          </Div>
          <Div mt={10} bg="white">
            <Div row py={8} px={16} justifyContent="space-between">
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Regular"),
                    fontSize: 14,
                    fontWeight: "400",
                    color: DarkColor,
                  },
                ]}
              >
                Subtotal
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                3540$
              </Text>
            </Div>
            <Div row py={8} px={16} justifyContent="space-between">
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Regular"),
                    fontSize: 14,
                    fontWeight: "400",
                    color: DarkColor,
                  },
                ]}
              >
                Shipping
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                3540$
              </Text>
            </Div>
            <Div row py={8} px={16} justifyContent="space-between">
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    fontSize: 14,
                    fontWeight: "bold",
                    color: DarkColor,
                  },
                ]}
              >
                Total
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                3540$
              </Text>
            </Div>
          </Div>
        </Div>
      </PullToRefreshScroll>
      <Div
        position="absolute"
        bg="white"
        left={0}
        bottom={0}
        p={16}
        w={deviceWidth}
      >
        <Div mb={15}>
          <Radio>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  fontSize: 11,
                  fontWeight: "400",
                },
              ]}
            >
              I agree to the Terms and Conditions
            </Text>
          </Radio>
        </Div>
        <Button>Place Order ($2349)</Button>
      </Div>
    </SafeAreaView>
  );
};
export default CheckoutPaymentMethodScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Black,
  },
  card: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
  },
  cardHeader: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 10,
  },
});
