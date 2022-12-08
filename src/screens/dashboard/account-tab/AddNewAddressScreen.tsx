import * as Yup from "yup";

import { Button, Input, Toggle } from "@ui-kitten/components";
import { Div, Image } from "react-native-magnus";
import { GrayBg, WhiteColor } from "../../../constants/color-manager";
import {
  I18nManager,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";

import { ImageAssets } from "../../../lib/assets-managers";
import { KeyboardAvoidingView } from "../../../components/KeyboardAvoidingView";
import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import SafeView from "../../../components/SafeView";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { deviceWidth } from "../../../lib/constant";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required(localizedStrings.pleaseEnterYourFirstName),
  lastName: Yup.string().required(localizedStrings.pleaseEnterYourLastName),
  phone: Yup.string().required(localizedStrings.pleaseEnterYourPhoneNumber),
  address: Yup.string().required(localizedStrings.pleaseEnterYourAddress),
  city: Yup.string().required(localizedStrings.pleaseEnterYourCity),
  area: Yup.string().required(localizedStrings.pleaseEnterYourArea),
  division: Yup.string().required(localizedStrings.pleaseChooseDivision),
});
const AddNewAddressScreen = () => {
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
      title: localizedStrings.addNewAddress,
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
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      area: "",
      division: "",
    },
    onSubmit: (values) => {
      // registerMutation.mutate(values);
    },
  });

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked: any) => {
    setChecked(isChecked);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PullToRefreshScroll>
        <KeyboardAvoidingView>
          <SafeView>
            <Input
              label={localizedStrings.firstName}
              onChangeText={handleChange("firstName")}
              onBlur={() => setFieldTouched("firstName")}
              value={values.firstName}
              status={errors.firstName ? "danger" : "basic"}
              caption={errors.firstName}
              placeholder={localizedStrings.firstName}
              size="large"
              style={{ marginTop: 20 }}
            />
            <Input
              label={localizedStrings.lastName}
              onChangeText={handleChange("lastName")}
              onBlur={() => setFieldTouched("lastName")}
              value={values.lastName}
              status={errors.lastName ? "danger" : "basic"}
              caption={errors.lastName}
              placeholder={localizedStrings.lastName}
              size="large"
              style={{ marginTop: 20 }}
            />
            <Input
              label={localizedStrings.phone}
              onChangeText={handleChange("phone")}
              onBlur={() => setFieldTouched("phone")}
              value={values.phone}
              status={errors.phone ? "danger" : "basic"}
              caption={errors.phone}
              placeholder={localizedStrings.phone}
              size="large"
              style={{ marginTop: 20 }}
            />
            <Input
              label={localizedStrings.address}
              onChangeText={handleChange("address")}
              onBlur={() => setFieldTouched("address")}
              value={values.address}
              status={errors.address ? "danger" : "basic"}
              caption={errors.address}
              placeholder={localizedStrings.address}
              size="large"
              style={{ marginTop: 20 }}
            />
            <Input
              label={localizedStrings.division}
              onChangeText={handleChange("division")}
              onBlur={() => setFieldTouched("division")}
              value={values.division}
              status={errors.division ? "danger" : "basic"}
              caption={errors.division}
              placeholder={localizedStrings.division}
              size="large"
              style={{ marginTop: 20 }}
            />
            <Input
              label={localizedStrings.city}
              onChangeText={handleChange("city")}
              onBlur={() => setFieldTouched("city")}
              value={values.city}
              status={errors.city ? "danger" : "basic"}
              caption={errors.city}
              placeholder={localizedStrings.city}
              size="large"
              style={{ marginTop: 20 }}
            />
            <Input
              label={localizedStrings.area}
              onChangeText={handleChange("area")}
              onBlur={() => setFieldTouched("area")}
              value={values.area}
              status={errors.area ? "danger" : "basic"}
              caption={errors.area}
              placeholder={localizedStrings.area}
              size="large"
              style={{ marginTop: 20 }}
            />
          </SafeView>
        </KeyboardAvoidingView>
      </PullToRefreshScroll>
      <Div
        p={15}
        bg={WhiteColor}
        position="absolute"
        bottom={0}
        w={deviceWidth}
      >
        <Div mb={10}>
          <Toggle checked={checked} onChange={onCheckedChange}>
            {localizedStrings.makeThisMyDefaultAddress}
          </Toggle>
        </Div>
        <Button size="large" onPress={handleSubmit}>
          {localizedStrings.save}
        </Button>
      </Div>
    </SafeAreaView>
  );
};
export default AddNewAddressScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GrayBg,
    paddingBottom: 150,
  },
});
