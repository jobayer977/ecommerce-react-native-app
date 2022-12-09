import { Black, PrimaryColor } from "../../../constants/color-manager";
import { Button, Card, Radio } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Div } from "react-native-magnus";
import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
const CheckoutShippingScreen = () => {
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
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView
      style={[
        commonStyles.container,
        {
          paddingBottom: 70,
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
          <Div>
            <Button size="small" appearance="ghost">
              Change Address
            </Button>
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
          <Div>
            <Button size="small" appearance="ghost">
              Change Address
            </Button>
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
              Delivery Options
            </Text>
          </Div>
          <Div mt={10} bg="white" px={10} py={14} rounded={5}>
            <Radio
              checked={checked}
              onChange={(nextChecked) => setChecked(nextChecked)}
            >
              <Div row alignItems="center">
                <Div flex={1}>
                  <Text
                    style={[
                      styles.title,
                      {
                        fontFamily: getFontNameType(appFontFamily, "Regular"),
                        fontWeight: "400",
                        fontSize: 14,
                        color: "#8F8F8F",
                      },
                    ]}
                  >
                    Regular Delivery
                  </Text>
                  <Text
                    style={[
                      styles.title,
                      {
                        fontFamily: getFontNameType(appFontFamily, "Regular"),
                        fontWeight: "400",
                        fontSize: 11,
                        color: "#8F8F8F",
                      },
                    ]}
                  >
                    With 3-5 working days
                  </Text>
                </Div>
                <Div>
                  <Text
                    style={[
                      styles.title,
                      {
                        fontFamily: getFontNameType(appFontFamily, "Bold"),
                        fontWeight: "bold",
                        fontSize: 14,
                        color: Black,
                      },
                    ]}
                  >
                    $60
                  </Text>
                </Div>
              </Div>
            </Radio>
          </Div>
        </Div>
      </PullToRefreshScroll>
      <Div position="absolute" left={0} w={deviceWidth} bottom={0} p={10}>
        <Button
          onPress={() => {
            navigation.navigate("CheckoutPaymentMethodScreen");
          }}
        >
          Proceed
        </Button>
      </Div>
    </SafeAreaView>
  );
};
export default CheckoutShippingScreen;
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
