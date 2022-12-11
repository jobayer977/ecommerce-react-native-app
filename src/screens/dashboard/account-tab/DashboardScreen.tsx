import {
  Black,
  DarkColor,
  GrayLightColor,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import { Div, Icon, Image } from "react-native-magnus";
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
const DashboardScreen = () => {
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
      title: localizedStrings.dashboard,
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
  const links = [
    {
      title: "My Orders",
      icon: "shoppingcart",
      onPress: () => {},
      color: "#EC2D83",
    },
    {
      title: "My Wishlist",
      icon: "heart",
      onPress: () => {},
      color: "#3266FF",
    },
    {
      title: "My Address",
      icon: "map-marker",
      onPress: () => {},
      color: "#00CF79",
    },
    {
      title: "My Profile",
      icon: "user",
      onPress: () => {},
      color: "#FFC107",
    },
  ];
  return (
    <SafeAreaView>
      <PullToRefreshScroll>
        <Div px={16} mt={30} pb={32}>
          <Div alignItems="center" justifyContent="center">
            <Div
              h={85}
              w={85}
              row
              justifyContent="center"
              alignItems="center"
              bg={PrimaryColor}
              rounded={80}
              mb={10}
            >
              <Image
                source={{
                  uri: tokenUser?.picture,
                }}
                h={80}
                w={80}
                rounded={80}
                bg={GrayLightColor}
              />
            </Div>
            <Text
              style={[
                styles.name,
                {
                  fontFamily: getFontNameType(appFontFamily, "Bold"),
                  marginBottom: 7,
                },
              ]}
            >
              Jon Doe
            </Text>
            <Text
              style={[
                styles.address,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                },
              ]}
            >
              6 rue de la paix, 75000 Paris
            </Text>
          </Div>
          <Button appearance="ghost">Edit Profile</Button>
        </Div>
        <SafeView row flexWrap="wrap">
          <Div w={"50%"} p={5}>
            <Div bg="#EC2D83" p={16} rounded={6} position="relative">
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: "bold",
                  },
                ]}
              >
                12
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                Total Order
              </Text>
              <Icon
                position="absolute"
                right={10}
                top={10}
                name={"barschart"}
                color={WhiteColor}
                fontSize={44}
              />
            </Div>
          </Div>
          <Div w={"50%"} p={5}>
            <Div bg="#3266FF" p={16} rounded={6} position="relative">
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: "bold",
                  },
                ]}
              >
                12
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                Review
              </Text>
              <Icon
                position="absolute"
                right={10}
                top={10}
                name={"paperclip"}
                color={WhiteColor}
                fontSize={44}
              />
            </Div>
          </Div>
          <Div w={"50%"} p={5}>
            <Div bg="#ED7202" p={16} rounded={6} position="relative">
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: "bold",
                  },
                ]}
              >
                12
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                Total Spent
              </Text>
              <Icon
                position="absolute"
                right={10}
                top={10}
                name={"export2"}
                color={WhiteColor}
                fontSize={44}
              />
            </Div>
          </Div>
          <Div w={"50%"} p={5}>
            <Div bg="#0DCA80" p={16} rounded={6} position="relative">
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: "bold",
                  },
                ]}
              >
                12
              </Text>
              <Text
                style={[
                  styles.name,
                  {
                    fontFamily: getFontNameType(appFontFamily, "Bold"),
                    marginBottom: 7,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                ]}
              >
                Points
              </Text>
              <Icon
                position="absolute"
                right={10}
                top={10}
                name={"wallet"}
                color={WhiteColor}
                fontSize={44}
              />
            </Div>
          </Div>
        </SafeView>
        <SafeView pt={30}>
          <FlatList
            data={links}
            renderItem={({ item }) => {
              return (
                <Div row mb={10}>
                  <Div
                    bg={item.color}
                    h={30}
                    w={30}
                    rounded={18}
                    row
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon name={item.icon} color={WhiteColor} fontSize={16} />
                  </Div>
                  <Text
                    style={[
                      styles.name,
                      {
                        fontFamily: getFontNameType(appFontFamily, "Medium"),
                        marginLeft: 10,
                        fontSize: 16,
                        color: Black,
                        fontWeight: "500",
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </Div>
              );
            }}
          />
        </SafeView>
      </PullToRefreshScroll>
    </SafeAreaView>
  );
};
export default DashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#F1F4FA",
  },
  headerRightTitle: {
    fontSize: 13,
    color: PrimaryColor,
  },
  name: {
    fontSize: 20,
    color: "#33353C",
  },
  typeTitle: {
    fontWeight: "400",
    fontSize: 12,
    color: PrimaryColor,
    textAlign: "center",
    lineHeight: 20,
    marginVertical: 6,
  },
  address: {
    fontSize: 13,
    color: "#6F7485",
    textAlign: "center",
    lineHeight: 22,
  },
  listHeader: {
    color: "#6F7485",
    fontSize: 13,
  },
  listText: {
    color: "#6F7485",
    fontSize: 13,
    // textAlign: "right",
    textAlign: "left",
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    color: DarkColor,
  },
});
