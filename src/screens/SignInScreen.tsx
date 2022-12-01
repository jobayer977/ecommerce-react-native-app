import { Button, Div } from "react-native-magnus";
import { I18nManager, StyleSheet, Text, View } from "react-native";

import RNRestart from "react-native-restart";
import React from "react";
import { localizedStrings } from "../lib/LocalizationStrings";

const SignInScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Div row alignItems="center">
        <Text>{localizedStrings.SignInScreen}</Text>
        <Button
          ml={20}
          onPress={() => {
            I18nManager.forceRTL(!I18nManager.isRTL);
            RNRestart.Restart();
          }}
        >
          Submit
        </Button>
      </Div>
    </View>
  );
};
export default SignInScreen;
const styles = StyleSheet.create({});
