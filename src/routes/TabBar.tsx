import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  useTheme,
} from "@ui-kitten/components";
import { Path, Svg } from "react-native-svg";
import { PrimaryColor, WhiteColor } from "../constants/color-manager";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Div } from "react-native-magnus";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useVisibilityAnimation = (visible: boolean): ViewStyle => {
  const animation = React.useRef<Animated.Value>(
    new Animated.Value(visible ? 1 : 0)
  );
  React.useEffect(() => {
    Animated.timing(animation.current, {
      duration: 200,
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [visible]);
  return {
    transform: [
      {
        // @ts-ignore
        translateY: animation.current.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
    // position: visible ? null : "absolute",
  };
};
export const TabBar: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
}) => {
  const focusedRoute = state.routes[state.index];
  const safeAreaInsets = useSafeAreaInsets();
  // const transforms = useVisibilityAnimation(true);
  const onSelect = (index: number): void => {
    if (index === 0) {
      navigation.navigate("ContactUSScreen");
    } else if (index === 1) {
      navigation.navigate("ContactUSScreen");
    } else if (index === 2) {
      navigation.navigate("NotificationScreen");
    } else if (index === 3) {
      navigation.navigate("NotificationScreen");
    } else if (index === 4) {
      navigation.navigate("AccountScreen");
    }
  };
  const theme = useTheme();
  return (
    <BottomNavigation
      appearance="noIndicator"
      selectedIndex={state.index}
      onSelect={onSelect}
      style={{
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: "transparent",
      }}
    >
      <BottomNavigationTab
        icon={(props) => (
          <Icon fill={WhiteColor} name="book-outline" {...props} />
        )}
        style={{
          backgroundColor: PrimaryColor,
        }}
      />
      <BottomNavigationTab
        icon={(props) => (
          <Icon fill={PrimaryColor} name="book-outline" {...props} />
        )}
        style={{
          backgroundColor: PrimaryColor,
        }}
      />
      <Div row justifyContent="center" alignItems="center">
        <TabBg color={PrimaryColor} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={{
            position: "absolute",
            top: -20,
            backgroundColor: PrimaryColor,
            height: 45,
            width: 45,
            borderRadius: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            style={{
              height: 22,
              width: 22,
            }}
            fill={WhiteColor}
            name="home-outline"
          />
        </TouchableOpacity>
      </Div>
      <BottomNavigationTab
        icon={(props) => (
          <Icon fill={WhiteColor} name="bell-outline" {...props} />
        )}
        style={{
          backgroundColor: PrimaryColor,
        }}
        onPress={() => {
          navigation.navigate("NotificationScreen");
        }}
      />
      <BottomNavigationTab
        icon={(props) => (
          <Icon fill={WhiteColor} name="menu-outline" {...props} />
        )}
        style={{
          backgroundColor: PrimaryColor,
        }}
        onPress={() => {
          navigation.navigate("AccountScreen");
        }}
      />
    </BottomNavigation>
  );
};
export const TabBg: React.FC<any> = ({ color = "#FFFFFF", ...props }) => {
  return (
    <Svg width={75} height={61} viewBox="0 0 75 61" {...props}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
};
export const TabBarAdvancedButton: React.FC<any> = ({ bgColor, ...props }) => (
  <View style={styles.container} pointerEvents="box-none">
    <TabBg color={bgColor} style={styles.background} />
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon name="rocket" style={styles.buttonIcon} />
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 75,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: "#E94F37",
  },
  buttonIcon: {
    fontSize: 16,
    color: "#F6F7EB",
  },
});
