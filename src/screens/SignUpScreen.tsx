import * as Yup from "yup";

import { Button, Input, Radio } from "@ui-kitten/components";
import { Div, Image, ScrollDiv, Text } from "react-native-magnus";
import {
  I18nManager,
  Linking,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PrimaryColor, SecondaryColor } from "../constants/color-manager";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ImageAssets } from "../lib/assets-managers";
import { KeyboardAvoidingView } from "../components/KeyboardAvoidingView";
import React from "react";
import { localizedStrings } from "../lib/LocalizationStrings";
import { useFormik } from "formik";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required(localizedStrings.nameIsRequired)
    .min(3, localizedStrings.tooShort),
  email: Yup.string()
    .required(localizedStrings.emailIsRequired)
    .email(localizedStrings.invalidEmail)
    .max(50, localizedStrings.tooLong),
  password: Yup.string()
    .required(localizedStrings.passwordIsRequired)
    .min(6, localizedStrings.tooShort)
    .max(50, localizedStrings.tooLong),
});
const SignUpScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const registerMutation = useRegister({
  //   config: {
  //     onSuccess: async (data) => {
  //       Snackbar.show({
  //         text: `Hi! ${data?.data?.data?.user?.user_name}, Your account is under review and will be activated soon`,
  //         duration: 5000,
  //         backgroundColor: "green",
  //         textColor: "white",
  //         numberOfLines: 2,
  //       });
  //       setTimeout(() => {
  //         navigation.navigate(route?.params?.fromScreen || "HomeTabStack");
  //       }, 5000);
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
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // registerMutation.mutate(values);
    },
  });
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <ScrollDiv showsVerticalScrollIndicator={false}>
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
                label={localizedStrings.name}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                value={values.name}
                status={errors.name ? "danger" : "basic"}
                caption={errors.name}
                placeholder={localizedStrings.enterYourName}
                size="large"
              />
              <Div mt={25} row justifyContent="center">
                <Text
                  mr={5}
                  textAlign="center"
                  fontWeight="400"
                  color={SecondaryColor}
                >
                  {localizedStrings.alreadyHaveAnAccount}{" "}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text
                    textAlign="center"
                    fontWeight="500"
                    color={PrimaryColor}
                  >
                    {localizedStrings.submit}
                  </Text>
                </TouchableOpacity>
              </Div>
            </Div>
          </ScrollDiv>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {/* {registerMutation.isLoading && <LoaderAnimation />} */}
    </>
  );
};
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
