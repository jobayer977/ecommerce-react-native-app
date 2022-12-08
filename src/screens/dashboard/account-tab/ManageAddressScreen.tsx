import { Black, DarkColor, WhiteColor } from "../../../constants/color-manager";
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

import { Button } from "@ui-kitten/components";
import { ImageAssets } from "../../../lib/assets-managers";
import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useNavigation } from "@react-navigation/native";
const ManageAddressScreen = () => {
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
      title: localizedStrings.manageAddress,
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
    });
  };
  // 10 address data will be shown here in a list
  const ADDRESS_DATA = [
    {
      id: 1,
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
    },
    {
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
    },
    {
      id: 1,
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
    },
    {
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
    },
    {
      id: 1,
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
    },
    {
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
    },
    {
      id: 1,
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
    },
    {
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
    },
    {
      id: 1,
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
    },
    {
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
    },
    {
      id: 1,
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
    },
    {
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
    },
    {
      id: 1,
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
    },
    {
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
    },
  ];
  return (
    <SafeAreaView style={commonStyles.container}>
      <PullToRefreshScroll>
        <SafeView>
          <FlatList
            data={ADDRESS_DATA}
            renderItem={({ item }) => (
              <Div mt={10} bg="white" px={10} py={14} rounded={5}>
                <Text
                  style={
                    (styles.title,
                    {
                      fontFamily: getFontNameType(appFontFamily, "Bold"),
                      fontWeight: "bold",
                      fontSize: 16,
                    })
                  }
                >
                  {item.firstName}
                </Text>
                <Text
                  style={
                    (styles.title,
                    {
                      fontFamily: getFontNameType(appFontFamily, "Regular"),
                      fontWeight: "400",
                      marginBottom: 20,
                      marginTop: 3,
                    })
                  }
                >
                  {item.contactNumber}
                </Text>
                <Text
                  style={
                    (styles.title,
                    {
                      fontFamily: getFontNameType(appFontFamily, "Regular"),
                      fontWeight: "400",
                      marginBottom: 20,
                      marginTop: 3,
                    })
                  }
                >
                  {item.address} {item.area} {item.city} {item.division}{" "}
                  {item.postalCode}
                </Text>
              </Div>
            )}
          />
        </SafeView>
      </PullToRefreshScroll>
      <Div p={10}>
        <Button
          onPress={() => {
            navigation.navigate("AddNewAddressScreen");
          }}
        >
          Add New Address
        </Button>
      </Div>
    </SafeAreaView>
  );
};
export default ManageAddressScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Black,
  },
});
