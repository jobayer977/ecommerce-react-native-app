import {
  Black,
  DarkColor,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import { Div, Image } from "react-native-magnus";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@ui-kitten/components";
import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";

const OrderDetailsScreen = () => {
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
      title: route.params?.title || localizedStrings.myOrders,
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
      ],
      headerTitleAlign: "center",
    });
  };
  const item = {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    address: "123, Main Street, New York, NY 10001",
    contactNumber: "1234567890",
    division: "Dhaka",
    city: "Dhaka",
    area: "Mirpur",
    postalCode: "1216",
    isBillingAddress: true,
    isShippingAddress: true,
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <PullToRefreshScroll>
        <Div bg={WhiteColor} p={16} pb={25} position="relative">
          <Div>
            <Text
              style={[
                {
                  fontFamily: getFontNameType(appFontFamily, "Medium"),
                  fontWeight: "500",
                  color: Black,
                },
              ]}
            >
              Order ID: #15D55F
            </Text>
            <Text
              style={[
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  fontWeight: "500",
                  color: DarkColor,
                  fontSize: 12,
                  marginTop: 5,
                },
              ]}
            >
              12/12/2020
            </Text>
          </Div>
          <Div position="absolute" right={16} top={16}>
            <Button
              status="success"
              size="tiny"
              style={{
                backgroundColor: "#15D55F",
                borderColor: "#15D55F",
              }}
            >
              Delivered
            </Button>
          </Div>
        </Div>
        <Div mt={20}>
          <FlatList
            data={[1, 2]}
            renderItem={({ item }) => (
              <Div bg={WhiteColor} p={16} row alignItems="flex-start">
                <Div flex={1}>
                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                        fontWeight: "600",
                        color: Black,
                        marginBottom: 5,
                        fontSize: 16,
                      },
                    ]}
                  >
                    One Plus 8T
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                        fontWeight: "600",
                        color: DarkColor,
                        fontSize: 12,
                        marginBottom: 5,
                      },
                    ]}
                  >
                    Color: Red,Blue
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                        fontWeight: "600",
                        color: DarkColor,
                        fontSize: 12,
                      },
                    ]}
                  >
                    Brand: One Plus
                  </Text>

                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "Bold"),
                        fontWeight: "bold",
                        color: Black,
                        marginBottom: 5,
                        fontSize: 18,
                        marginVertical: 22,
                      },
                    ]}
                  >
                    $ 1240
                  </Text>
                </Div>
                <Div>
                  <Image
                    source={{
                      uri: "https://via.placeholder.com/150",
                    }}
                    h={80}
                    w={80}
                    rounded={10}
                  />
                </Div>
              </Div>
            )}
          />
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
              Shipping Address
            </Text>
          </Div>
          <Div mt={10} bg="white" px={10} py={14} rounded={5}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Bold"),
                  fontWeight: "bold",
                  fontSize: 13,
                },
              ]}
            >
              {item.firstName}
            </Text>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  fontWeight: "400",
                  marginBottom: 20,
                  fontSize: 14,
                  color: "#8F8F8F",
                  marginTop: 3,
                },
              ]}
            >
              {item.contactNumber}
            </Text>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  fontWeight: "400",
                  marginTop: 3,
                  fontSize: 14,
                  color: "#8F8F8F",
                },
              ]}
            >
              {item.address} {item.area} {item.city} {item.division}{" "}
              {item.postalCode}
            </Text>
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
              Billing Address
            </Text>
          </Div>
          <Div mt={10} bg="white" px={10} py={14} rounded={5}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Bold"),
                  fontWeight: "bold",
                  fontSize: 13,
                },
              ]}
            >
              {item.firstName}
            </Text>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  fontWeight: "400",
                  marginBottom: 20,
                  fontSize: 14,
                  color: "#8F8F8F",
                  marginTop: 3,
                },
              ]}
            >
              {item.contactNumber}
            </Text>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  fontWeight: "400",
                  marginTop: 3,
                  fontSize: 14,
                  color: "#8F8F8F",
                },
              ]}
            >
              {item.address} {item.area} {item.city} {item.division}{" "}
              {item.postalCode}
            </Text>
          </Div>
        </Div>
      </PullToRefreshScroll>
    </SafeAreaView>
  );
};
export default OrderDetailsScreen;
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
