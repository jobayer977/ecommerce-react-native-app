import { Div, DivProps } from "react-native-magnus";
import { StyleSheet, Text } from "react-native";

import { Button } from "@ui-kitten/components";
import { DarkColor } from "../constants/color-manager";
import React from "react";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../lib/font-names";
import { selectAppFontFamily } from "../redux/SplashScreenReducer";
import { useSelector } from "react-redux";

interface IFProps extends DivProps {
  title: string;
  onPress?: () => void;
}
const BaseTitle: React.FC<IFProps> = ({ title, onPress, ...rest }) => {
  const { appFontFamily } = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    })
  );
  return (
    <Div mb={10} row alignItems="center" {...rest}>
      <Text
        style={[
          {
            fontFamily: getFontNameType(appFontFamily, "SemiBold"),
            flex: 1,
            color: DarkColor,
            fontSize: 16,
            fontWeight: "700",
          },
        ]}
      >
        {title}
      </Text>
      <Button appearance="ghost" onPress={onPress}>
        View All
      </Button>
    </Div>
  );
};
export default BaseTitle;
const styles = StyleSheet.create({});
