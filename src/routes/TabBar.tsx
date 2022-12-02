import { Animated, ViewStyle } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Div } from "react-native-magnus";
import { PrimaryColor } from "../lib/color-manager";
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
  const { tabBarVisible } = descriptors[focusedRoute.key].options;
  const safeAreaInsets = useSafeAreaInsets();
  const transforms = useVisibilityAnimation(true);
  const onSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Animated.View
      style={[
        styles.container,
        transforms,
        // { paddingBottom: tabBarVisible ? safeAreaInsets.bottom : 0 },
      ]}
    >
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={onSelect}
        // style={{
        //   backgroundColor: theme["color-primary-400"],
        // }}
      >
        <BottomNavigationTab
          title={"Home"}
          icon={(props) => <Icon name="home-outline" {...props} />}
        />
        <BottomNavigationTab
          title={"Categories"}
          icon={(props) => <Icon name="grid-outline" {...props} />}
        />
        <BottomNavigationTab
          title={"Notifications"}
          icon={(props) => <Icon name="bell-outline" {...props} />}
        />
        <BottomNavigationTab
          title="Account"
          icon={(props) => <Icon name="person-outline" {...props} />}
        />
      </BottomNavigation>
    </Animated.View>
  );
};
const themedStyles = StyleService.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
