import { Div, Image } from "react-native-magnus";
import { LightColor, WhiteColor } from "../lib/color-manager";
import { StyleSheet, Text } from "react-native";

import { ImageAssets } from "../lib/assets-managers";
import React from "react";
import { deviceWidth } from "../lib/constant";

const CommingSoonScreen = () => {
  return (
    <Div
      flex={1}
      row
      justifyContent="center"
      alignItems="center"
      bg={WhiteColor}
    >
      <Div alignItems="center">
        <Image
          source={ImageAssets.comingsoon}
          h={deviceWidth / 2}
          w={deviceWidth / 2}
        />
        <Text style={styles.hint}>Under Construction</Text>
      </Div>
    </Div>
  );
};

export default CommingSoonScreen;

const styles = StyleSheet.create({
  hint: {
    color: LightColor,
    fontSize: 12,
    opacity: 0.7,
    lineHeight: 18,
  },
});
