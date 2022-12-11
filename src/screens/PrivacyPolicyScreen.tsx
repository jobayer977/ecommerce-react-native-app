import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import RenderHtml from "react-native-render-html";
import SafeView from "../components/SafeView";
import { ScrollDiv } from "react-native-magnus";
import { commonStyles } from "../common.styles";
import { deviceWidth } from "../lib/constant";
import { useNavigation } from "@react-navigation/native";

const source = {
  html: `
<p style='text-align:right;'>
  Hello World!
</p>`,
};
const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    configHeader();
    return () => {};
  }, []);
  const configHeader = () => {
    navigation.setOptions({
      title: "Privacy Policy",
      headerShown: true,
      headerShadowVisible: false,
      headerTitleStyle: [commonStyles.headerTitleStyle],
      headerTitleAlign: "center",
    });
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollDiv>
        <SafeView>
          <RenderHtml
            contentWidth={deviceWidth - 32}
            source={{
              html: demoContect,
            }}
          />
        </SafeView>
      </ScrollDiv>
    </SafeAreaView>
  );
};
export default PrivacyPolicyScreen;
const styles = StyleSheet.create({});
const demoContect = `
<p>Last updated: April 01, 2021</p>
<p>Please read these Privacy Policy ("Privacy Policy", "Privacy Policy") carefully before using the https://www.example.com website (the "Service") operated by Your Website Name ("us", "we", or "our").</p>
<p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
<h2>Accounts</h2>
<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
`;
