import { Dimensions } from "react-native";

// Device Height & width
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
export const bdPhoneNumberRegex = /^(?:\+?88)?0?1[3-9]\d{8}$/g;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const supportPhoneNumber = "01700000000";
