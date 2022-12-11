import {
  DarkColor,
  GrayLightColor,
  PrimaryColor,
} from "../../../constants/color-manager";
import { Div, Image, ScrollDiv } from "react-native-magnus";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@ui-kitten/components";
import { ImageAssets } from "../../../lib/assets-managers";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { selectTokenUser } from "../../../redux/auth.reducer";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { appFontFamily, tokenUser } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
      tokenUser: selectTokenUser,
    })
  );
  useEffect(() => {
    configureHeader();
    return () => {};
  }, []);
  console.log("tokenUser", tokenUser);
  const configureHeader = () => {
    navigation.setOptions({
      headerShown: true,
      title: localizedStrings.myProfile,
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        {
          fontFamily: getFontNameType(appFontFamily, "Bold"),
          paddingLeft: 10,
        },
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
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    });
  };
  return (
    <View style={styles.container}>
      <ScrollDiv mb={70} flex={1} showsVerticalScrollIndicator={false}>
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
              1234, Main Street, New York, USA
            </Text>
          </Div>
        </Div>
        <Div px={16}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontNameType(appFontFamily, "SemiBold"),
              },
            ]}
          >
            {localizedStrings.contactInformation}
          </Text>
          <Div py={10} borderBottomColor="gray100" borderBottomWidth={1}>
            <Text
              style={[
                styles.listHeader,
                {
                  fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                },
              ]}
            >
              {localizedStrings.phone}
            </Text>
            <Text
              style={[
                styles.listText,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                },
              ]}
            >
              +(123) 456 7890
            </Text>
          </Div>
        </Div>
      </ScrollDiv>
      <Div p={16} position="absolute" bottom={0} left={0} w={deviceWidth}>
        <Button
          onPress={() => {
            navigation.navigate("EditProfileScreen");
          }}
        >
          {localizedStrings.editAccount}
        </Button>
      </Div>
    </View>
  );
};
export default ProfileScreen;
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
