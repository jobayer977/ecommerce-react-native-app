import LocalizedStrings from "react-native-localization";
let localizedStrings = new LocalizedStrings({
  "en-US": {
    SignInScreen: "Sign In Screen",
  },
  ar: {
    SignInScreen: "شاشة تسجيل الدخول",
  },
});
let currentLocalizedLanguage = localizedStrings.getLanguage();
export { localizedStrings, currentLocalizedLanguage };
