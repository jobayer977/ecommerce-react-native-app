import { Platform } from "react-native";
type FontNames = "Inter" | "AbhayaLibre" | "Mukta";
type FontTypes = "Regular" | "Medium" | "SemiBold" | "Bold" | "Black";
export function getFontNameType(fontname: FontNames, fontType: FontTypes) {
  let fontName = "";
  switch (fontname) {
    case "Inter":
      switch (fontType) {
        case "Regular":
          fontName = Platform.OS == "ios" ? "Poppins Regular" : "Poppins";
          break;
        case "Black":
          fontName = Platform.OS == "ios" ? "Poppins Regular" : "Poppins";
          break;
        case "Medium":
          fontName = Platform.OS == "ios" ? "Poppins Regular" : "Poppins";
          break;
        case "Bold":
          fontName = Platform.OS == "ios" ? "Poppins Regular" : "Poppins";
          break;
        case "SemiBold":
          fontName = Platform.OS == "ios" ? "Poppins Regular" : "Poppins";
          break;
        default:
          break;
      }
    default:
      break;
  }
  return fontName;
}
