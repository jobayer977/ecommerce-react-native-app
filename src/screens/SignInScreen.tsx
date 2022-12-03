import * as Yup from "yup";

import { Button, Icon, Input } from "@ui-kitten/components";
import { Div, Image, Text } from "react-native-magnus";
import {
  I18nManager,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PrimaryColor, SecondaryColor } from "../constants/color-manager";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ImageAssets } from "../lib/assets-managers";
import { KeyboardAvoidingView } from "../components/KeyboardAvoidingView";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../lib/font-names";
import { localizedStrings } from "../lib/LocalizationStrings";
import { selectAppFontFamily } from "../redux/SplashScreenReducer";
import { useFormik } from "formik";

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .required(localizedStrings.phoneNumberIsRequired)
    .min(10, localizedStrings.tooShort),
  password: Yup.string()
    .required(localizedStrings.passwordIsRequired)
    .min(6, localizedStrings.tooShort)
    .max(50, localizedStrings.tooLong),
});
const SignInScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const router = useRoute();
  const { appFontFamily } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    })
  );
  // const loginMutation = useLogin({
  //   config: {
  //     onSuccess: async (data) => {
  //       setAppLoading(true);
  //       await setToken(data?.data?.data?.token);
  //       await setLocalDate("USER", data?.data?.data?.user);
  //       await setLocalDate("IS_AUTHENTICATED", true);
  //       dispatch(setTokenUser(data?.data?.data?.user));
  //       dispatch(setIsAuthenticated(true));
  //       navigation.navigate(router?.params?.toScreen || "HomeTabStack");
  //       setAppLoading(false);
  //     },
  //   },
  // });
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
    initialValues: { phone: "01867828247", password: "123456" },
    onSubmit: (values) => {
      // loginMutation.mutate({
      //   device_id: String(Math.random().toString(36).substring(7)),
      //   phone_number: values.phone,
      //   password: values.password,
      // });
    },
  });
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <Div px={16} pt={40} flex={1} justifyContent="center">
            <Div row justifyContent="center" mb={20}>
              <Image
                source={ImageAssets.logoPrimaryColor}
                h={100}
                w={150}
                resizeMode="contain"
              />
            </Div>
            <Input
              label={localizedStrings.mobileNumber}
              onChangeText={handleChange("phone")}
              onBlur={() => setFieldTouched("phone")}
              value={values.phone}
              status={errors.phone ? "danger" : "basic"}
              caption={errors.phone}
              placeholder={localizedStrings.enterYourMobileNumber}
              size="large"
              textAlign={I18nManager.isRTL ? "right" : "left"}
            />
            <Div mt={10}>
              <Input
                label={localizedStrings.password}
                placeholder={localizedStrings.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                value={values.password}
                secureTextEntry
                status={errors.password ? "danger" : "basic"}
                caption={errors.password}
                size="large"
                textAlign={I18nManager.isRTL ? "right" : "left"}
              />
            </Div>
            <Div mt={30}>
              <Button size="large" onPress={handleSubmit}>
                {localizedStrings.signIn}
              </Button>
            </Div>
            <Div mt={10}>
              <Button
                size="large"
                onPress={handleSubmit}
                status="primary"
                style={{
                  backgroundColor: "#4285F4",
                  borderColor: "#3b5998",
                }}
                accessoryLeft={() => (
                  <Icon name="google" fill="#fff" height={23} width={23} />
                )}
              >
                {localizedStrings.signInWithGoogle}
              </Button>
            </Div>
            <Div mt={25} row justifyContent="center">
              <Text
                mr={5}
                textAlign="center"
                fontWeight="400"
                color={SecondaryColor}
              >
                {localizedStrings.donTHaveAnAccount}{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUpScreen", {
                    toScreen: router?.params?.toScreen || "HomeTabStack",
                    fromScreen: router?.params?.fromScreen || "HomeTabStack",
                  });
                }}
              >
                <Text textAlign="center" fontWeight="500" color={PrimaryColor}>
                  {localizedStrings.singUp}
                </Text>
              </TouchableOpacity>
            </Div>
            <Div mt={20} justifyContent="center" alignItems="center">
              <Image
                my={15}
                source={ImageAssets.finger}
                h={45}
                w={45}
                resizeMode="contain"
              />
              <Text
                fontFamily={getFontNameType(appFontFamily, "Regular")}
                textAlign="center"
                color={SecondaryColor}
              >
                {
                  localizedStrings.useYourFigurePrintForExtraSecurityFromSettings
                }
              </Text>
            </Div>
          </Div>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {/* {(loginMutation.isLoading || appLoading) && <LoaderAnimation />} */}
    </>
  );
};
export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
