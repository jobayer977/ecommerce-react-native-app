/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { deviceHeight, deviceWidth } from "../lib/constant";
import { getBottomSpace, ifIphoneX } from "react-native-iphone-x-helper";

import { ImageAssets } from "../lib/assets-managers";
import Modal from "react-native-modal";
import NetInfo from "@react-native-community/netinfo";
import React from "react";
import { WhiteColor } from "../lib/color-manager";
class PresentInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isKeyboardOpen: false,
      connected: null,
    };
  }
  keyboardDidShowListener = null;
  keyboardDidHideListener = null;
  subscription = null;
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide.bind(this)
    );
    this.subscription = NetInfo.addEventListener((state) => {
      this.setState({ connected: state.isConnected });
    });
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    this.subscription && this.subscription();
  }
  _keyboardDidShow() {
    this.setState({
      isKeyboardOpen: true,
    });
  }
  _keyboardDidHide() {
    this.setState({
      isKeyboardOpen: false,
    });
  }
  open() {
    this.setState({
      isVisible: true,
    });
  }
  close() {
    Keyboard.dismiss();
    this.setState({
      isVisible: false,
    });
  }
  render() {
    const {
      designView,
      isBackTap,
      onTapClose,
      viewWidth = deviceWidth,
      modelStyle,
    } = this.props;
    let container = Platform.OS == "ios" ? styles.container : {};
    return (
      <Modal isVisible={this.state.isVisible} style={styles.main}>
        <KeyboardAvoidingView
          style={[
            container,
            { backgroundColor: "transparent", width: viewWidth },
          ]}
          behavior={"padding"}
          keyboardVerticalOffset={
            Platform.OS == "android"
              ? this.state.isKeyboardOpen
                ? 22
                : 0
              : ifIphoneX(-getBottomSpace(), 0)
          }
        >
          <View
            style={[
              styles.container,
              { backgroundColor: "transparent", width: viewWidth },
            ]}
          >
            <View
              style={[
                styles.bottomView,
                {
                  width: viewWidth,
                  paddingBottom:
                    Platform.OS == "ios"
                      ? ifIphoneX
                        ? getBottomSpace() + 22
                        : 22
                      : 16,
                },
                modelStyle,
              ]}
              activeOpacity={1}
            >
              {designView}
            </View>
            {this.state.connected ? (
              <TouchableOpacity
                onPress={() => {
                  onTapClose != undefined ? this.props.onTapClose() : null;
                  this.close();
                }}
                style={{ height: 50, width: 50, alignSelf: "flex-end" }}
              >
                <Image
                  source={ImageAssets.white_close}
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: deviceHeight,
    backgroundColor: "rgba(0,0,0,0.55)",
    flexDirection: "column-reverse",
  },
  bottomView: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: WhiteColor,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: "center",
    width: deviceWidth,
  },
});
export default PresentInfoComponent;
