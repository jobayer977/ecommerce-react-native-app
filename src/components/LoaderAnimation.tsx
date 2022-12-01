import * as Animatable from "react-native-animatable";

import { SafeAreaView, StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";
import React from "react";

const LoaderAnimation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View style={styles.loaderView}>
        <LottieView
          style={styles.loader}
          source={require("./loader.json")}
          autoPlay
          loop
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default LoaderAnimation;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  loaderView: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  loader: {
    height: 180,
    width: 180,
  },
});
