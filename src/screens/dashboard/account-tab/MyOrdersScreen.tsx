import {
  Black,
  DarkColor,
  PrimaryColor,
  WhiteColor,
} from "../../../constants/color-manager";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  selectIsAuthenticated,
  selectTokenUser,
} from "../../../redux/auth.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@ui-kitten/components";
import { Div } from "react-native-magnus";
import PullToRefreshScroll from "../../../components/PullToRefreshScroll";
import { commonStyles } from "../../../common.styles";
import { createStructuredSelector } from "reselect";
import { getFontNameType } from "../../../lib/font-names";
import { localizedStrings } from "../../../lib/LocalizationStrings";
import { selectAppFontFamily } from "../../../redux/SplashScreenReducer";

const MyOrdersScreen = () => {
  const [appLoading, setAppLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
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
      statusBarColor: PrimaryColor,
      title: route.params?.title || localizedStrings.myOrders,
      headerShadowVisible: false,
      headerTitleStyle: [
        commonStyles.headerTitleStyle,
        { fontFamily: getFontNameType(appFontFamily, "Bold") },
      ],
      headerTitleAlign: "center",
    });
  };
  const ORDERS = [
    {
      id: "#123456",
      date: "12/12/2020",
      status: "Delivered",
      total: "Rs. 1000",
    },
    {
      id: "#123456",
      date: "12/12/2020",
      status: "Delivered",
      total: "Rs. 1000",
    },
  ];
  return (
    <SafeAreaView>
      <PullToRefreshScroll>
        <FlatList
          data={ORDERS}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OrderDetailsScreen", {
                  title: item.id,
                });
              }}
            >
              <Div bg={WhiteColor} p={16} mt={10}>
                <Div>
                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "Medium"),
                        fontWeight: "500",
                        color: Black,
                      },
                    ]}
                  >
                    Order {item.id}
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "Regular"),
                        fontWeight: "500",
                        color: DarkColor,
                        fontSize: 12,
                        marginTop: 5,
                      },
                    ]}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: getFontNameType(appFontFamily, "Bold"),
                        fontWeight: "bold",
                        color: Black,
                        marginVertical: 20,
                        fontSize: 18,
                      },
                    ]}
                  >
                    {item.total}
                  </Text>
                </Div>
                <Div position="absolute" right={16} top={16}>
                  <Button
                    status="success"
                    size="tiny"
                    style={{
                      backgroundColor: "#15D55F",
                      borderColor: "#15D55F",
                    }}
                  >
                    Delivered
                  </Button>
                </Div>
              </Div>
            </TouchableOpacity>
          )}
        />
      </PullToRefreshScroll>
    </SafeAreaView>
  );
};
export default MyOrdersScreen;
const styles = StyleSheet.create({});
