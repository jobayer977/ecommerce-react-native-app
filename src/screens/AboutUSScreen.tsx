import * as Animate from "react-native-animatable";

import {
  DarkColor,
  PrimaryColor,
  WhiteColor,
} from "../constants/color-manager";
import { Div, Image, ScrollDiv } from "react-native-magnus";
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@ui-kitten/components";
import { ImageAssets } from "../lib/assets-managers";
import SafeView from "../components/SafeView";
import { commonStyles } from "../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../lib/font-names";
import { localizedStrings } from "../lib/LocalizationStrings";
import { selectAppFontFamily } from "../redux/SplashScreenReducer";
import { supportPhoneNumber } from "../lib/constant";
import { useNavigation } from "@react-navigation/native";

const AboutUSScreen = () => {
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
      headerShown: true,
      title: localizedStrings.aboutUs,
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
      ],
      headerTitleAlign: "center",
    });
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <Div px={16} flex={1} justifyContent="space-between">
        <Div flex={1} justifyContent="center">
          <Div row justifyContent="center">
            <Animate.Image
              source={ImageAssets.logoPrimaryColor}
              style={{ width: 150, height: 100, resizeMode: "contain" }}
              animation={{
                from: {
                  opacity: 0,
                  scaleX: 0.5,
                },
                to: {
                  opacity: 1,
                  scaleX: 1,
                },
              }}
            />
          </Div>
          <Text
            style={[
              styles.subTitle,
              {
                fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                textAlign: "center",
              },
            ]}
          >
            {localizedStrings.aboutUs}
          </Text>
          <Text
            style={[
              styles.description,
              {
                fontFamily: getFontNameType(appFontFamily, "Regular"),
              },
            ]}
          >
            Industrial Tools company is a leading manufacturer of high quality
            industrial tools and equipment. The company was established in 1990
            and has been growing steadily ever since.
          </Text>
        </Div>
        <Div>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${supportPhoneNumber}`);
            }}
          >
            <Div row alignItems="center" my={15}>
              <Icon
                name="phone-outline"
                fill={"#87939A"}
                style={styles.sclIcon}
              />
              <Div ml={10}>
                <Text
                  style={[
                    styles.sclTitle,
                    {
                      fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                      textAlign: "left",
                    },
                  ]}
                >
                  {localizedStrings.phone}
                </Text>
                <Text style={styles.sclDescription}>{supportPhoneNumber}</Text>
              </Div>
            </Div>
          </TouchableOpacity>
          <Div row alignItems="center" mb={15}>
            <Icon
              name="printer-outline"
              fill={"#87939A"}
              style={styles.sclIcon}
            />
            <Div ml={10}>
              <Text
                style={[
                  styles.sclTitle,
                  {
                    fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                    textAlign: "left",
                  },
                ]}
              >
                {localizedStrings.fax}
              </Text>
              <Text style={styles.sclDescription}>+970 2 298 0300</Text>
            </Div>
          </Div>
          <TouchableOpacity onPress={() => {}}>
            <Div row alignItems="center" mb={15}>
              <Icon
                name="navigation-2-outline"
                fill={"#87939A"}
                style={styles.sclIcon}
              />
              <Div ml={10}>
                <Text
                  style={[
                    styles.sclTitle,
                    {
                      fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                      textAlign: "left",
                    },
                  ]}
                >
                  {localizedStrings.address}
                </Text>
                <Text
                  style={[
                    styles.sclDescription,
                    {
                      textAlign: "left",
                      fontFamily: getFontNameType(appFontFamily, "Regular"),
                    },
                  ]}
                >
                  Eastern Industrial Zone, Nablus, US.
                </Text>
              </Div>
            </Div>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("mailto:jondoe@mail.ps");
            }}
          >
            <Div row alignItems="center" mb={15}>
              <Icon
                name="navigation-2-outline"
                fill={"#87939A"}
                style={styles.sclIcon}
              />
              <Div ml={10}>
                <Text
                  style={[
                    styles.sclTitle,
                    {
                      fontFamily: getFontNameType(appFontFamily, "SemiBold"),
                      textAlign: "left",
                    },
                  ]}
                >
                  jondoe@gmail.com
                </Text>
                <Text style={styles.sclDescription}>info@mdm.ps</Text>
              </Div>
            </Div>
          </TouchableOpacity>
          <Div row justifyContent="center" mt={15}>
            <Div mx={5}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={ImageAssets.fb}
                  h={30}
                  w={30}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Div>
          </Div>
          <Div row my={15} alignItems="center" justifyContent="center">
            <Text
              style={[
                styles.powerByTxt,
                {
                  fontFamily: getFontNameType(appFontFamily, "Regular"),
                  textAlign: "left",
                },
              ]}
            >
              Powered by
            </Text>
            <Image
              ml={10}
              source={ImageAssets.logoPrimaryColor}
              h={50}
              w={50}
              resizeMode="contain"
            />
          </Div>
        </Div>
      </Div>
    </SafeAreaView>
  );
};
export default AboutUSScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#33353C",
  },
  subTitle: {
    fontSize: 14,
    color: "#2C3A42",
    marginBottom: 13,
    textTransform: "capitalize",
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    color: "#87939A",
    lineHeight: 22,
  },
  sclDescription: {
    fontSize: 12,
    color: "#87939A",
  },
  sclIcon: {
    width: 24,
    height: 24,
  },
  sclTitle: {
    fontSize: 12,
    color: DarkColor,
  },
  powerByTxt: {
    fontWeight: "500",
    fontSize: 16,
    color: "#000000",
  },
});
