import * as Yup from "yup";

import { Button, Input, Radio } from "@ui-kitten/components";
import {
  DarkColor,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import { Div, Image, ScrollDiv } from "react-native-magnus";
import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { selectTokenUser, setTokenUser } from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";

import { ImageAssets } from "../../../lib/assets-managers";
import { KeyboardAvoidingView } from "../../../components/KeyboardAvoidingView";
import LoaderAnimation from "../../../components/LoaderAnimation";
import SafeView from "../../../components/SafeView";
import Snackbar from "react-native-snackbar";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(localizedStrings.enterYourFullName)
    .min(1, localizedStrings.tooShort),
  address: Yup.string().required(localizedStrings.addressIsRequired),
});
const EditProfileScreen = () => {
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
  const configureHeader = () => {
    navigation.setOptions({
      headerShown: true,
      title: localizedStrings.editProfile,
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
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldTouched,
    dirty,
    isValid,
  } = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      fullName: tokenUser?.user_name,
      mobile: tokenUser?.phone_number,
      address: tokenUser?.address,
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <View style={styles.container}>
        <ScrollDiv mb={70} flex={1} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <ScrollDiv showsVerticalScrollIndicator={false}>
              <Div px={16} pt={40} flex={1} justifyContent="center">
                <Div row justifyContent="center" mb={20}>
                  <Image
                    source={ImageAssets.image_picker}
                    h={100}
                    w={150}
                    resizeMode="contain"
                  />
                </Div>
                <Input
                  label={localizedStrings.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={() => setFieldTouched("fullName")}
                  value={values.fullName}
                  status={errors.fullName ? "danger" : "basic"}
                  caption={errors.fullName}
                  placeholder={localizedStrings.enterYourFirstName}
                  size="large"
                />
                <Div mt={15}>
                  <Input
                    label={localizedStrings.mobile}
                    placeholder={localizedStrings.mobile}
                    value={values.mobile}
                    caption={"Mobile number is not changeable"}
                    size="large"
                    disabled
                  />
                </Div>
                <Div mt={15}>
                  <Input
                    label={localizedStrings.address}
                    placeholder={localizedStrings.address}
                    onChangeText={handleChange("address")}
                    onBlur={() => setFieldTouched("address")}
                    value={values.address}
                    status={errors.address ? "danger" : "basic"}
                    caption={errors.address}
                    size="large"
                    numberOfLines={3}
                    textAlignVertical="top"
                  />
                </Div>
              </Div>
            </ScrollDiv>
          </KeyboardAvoidingView>
        </ScrollDiv>
        <Div p={16} position="absolute" bottom={0} left={0} w={deviceWidth}>
          <Button
            onPress={() => {
              handleSubmit();
              console.log("values", values);
            }}
          >
            {localizedStrings.update}
          </Button>
        </Div>
      </View>
      {/* {updateProfile.isLoading && <LoaderAnimation />} */}
    </>
  );
};
export default EditProfileScreen;
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
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    color: DarkColor,
  },
});
