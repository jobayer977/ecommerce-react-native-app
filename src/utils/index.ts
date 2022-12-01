import { Linking, Platform } from "react-native";
import moment, { Moment } from "moment";

import jwtDecode from "jwt-decode";

export class _ {
  public static jwtDecodeFunction = (code: string) => {
    return jwtDecode(code);
  };
  public static isJwtExpired = (tokens: number): boolean => {
    const date: Date = new Date(tokens * 1000);
    const parsedDate = Date.parse(date.toString());
    if (parsedDate - Date.now() > 0) {
      return false;
    } else {
      return true;
    }
  };
  public static getSerializeData(data: any[]) {
    const serializeData = data?.sort((a, b) => a.serial - b.serial);
    return serializeData;
  }
  static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }
  public static isValidArray(value: any): boolean {
    return Array.isArray(value) && value.length > 0;
  }
  public static isValidObject(value: any): boolean {
    return typeof value === "object" && value !== null;
  }
  public static toSafeValue(value: any): any {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return "";
  }
  public static randomString(
    length: number,
    type: "lower" | "upper" | "numeric"
  ): string {
    let result = "";
    const characters =
      type === "lower"
        ? "abcdefghijklmnopqrstuvwxyz"
        : type === "upper"
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        : type === "numeric"
        ? "0123456789"
        : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  public static isValidString(value: any): boolean {
    return typeof value === "string" && value.length > 0;
  }
  public static isValidNumber(value: any): boolean {
    return typeof value === "number" && !isNaN(value);
  }
  public static isValidBoolean(value: any): boolean {
    return typeof value === "boolean";
  }
  //is not empty
  public static isNotEmpty(value: any): boolean {
    return value !== null && value !== undefined && value !== "";
  }
  public static toNumber(value: any): number {
    return Number(value);
  }
  //safety convert to number
  public static toSafeNumber(value: any): number {
    if (_.isNotEmpty(value)) {
      return Number(value);
    }
    return 0;
  }
  //safety convert to string
  public static toSafeString(value: any): string {
    if (_.isNotEmpty(value)) {
      return value.toString();
    }
    return "";
  }
  public static toSafeObject(value: any): any {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return {};
  }
  public static toBooleanSafe(value: any): boolean {
    if (_.isNotEmpty(value)) {
      return value.toString() === "true";
    }
    return false;
  }
  public static findMax(array: number[]): number {
    return Math.max.apply(Math, array);
  }
  public static findMin(array: number[]): number {
    return Math.min.apply(Math, array);
  }
  public static findAverage(array: number[]): number {
    let sum = 0;
    for (const value of array) {
      sum += value;
    }
    return sum / array.length;
  }
  public static findMedian(array: number[]): number {
    const sorted = array.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  }
  public static isEmpty(value: any): boolean {
    return (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      value === "null" ||
      value === "undefined"
    );
  }
  //to safe array
  public static toSafeArray(value: any): any[] {
    if (_.isNotEmpty(value)) {
      return value;
    }
    return [];
  }
  public static toCleanObject(obj: { [key: string]: any }): any {
    if (_.isValidObject(obj)) {
      Object.keys(obj).forEach((key) => {
        if (_.isEmpty(obj[key])) {
          delete obj[key];
        }
      });
    }
    return _.toSafeObject(obj);
  }
  public static toQueryString(params: any): string {
    if (_.isValidObject(params)) {
      return Object.keys(params)
        .map((key) => {
          return key + "=" + params[key];
        })
        .join("&");
    }
    return "";
  }
  public static getNestedObjectValueInArray = (obj: any) => {
    return Object.values(_.toSafeObject(obj))?.map((x) => {
      if (typeof x === "object") {
        return _.getNestedObjectValueInArray(x);
      } else {
        return x;
      }
    });
  };
  // is valid browser url
  public static isValidBrowserUrl(url: string): boolean {
    // check is string
    if (typeof url !== "string") {
      return false;
    }
    return url?.startsWith("http://") || url?.startsWith("https://");
  }
  // check url ending extension
  public static isValidSvgUrl(url: string): boolean {
    // check is string
    if (typeof url !== "string") {
      return false;
    }
    return url?.toLocaleLowerCase()?.endsWith(".svg");
  }
  // to safe svg react native svg component (react native svg)
  public static toSafeSvg(value: any): any {
    if (_.isValidSvgUrl(value)) {
      return value;
    } else {
      return "https://raw.githubusercontent.com/Health-Bondhu/octo/c0a06ffc6b18880a542b5c43b9331c02a056693c/no_data.svg?token=AIGPNQBECXYEFGZBROQEVC3CTR3QS";
    }
  }
  // check is valid svg code
  public static isValidSvgCode(value: string): boolean {
    if (typeof value !== "string") {
      return false;
    }
    // check length
    if (value.length < 1) {
      return false;
    }
    return value?.startsWith("<svg") || value?.startsWith("<?xml");
  }
  // get url extension
  public static getUrlExtension(url: string): string {
    if (_.isValidBrowserUrl(url)) {
      return url.split(".").pop();
    }
    return "";
  }
  // check is svg url
  public static isSvgUrl(url: string): boolean {
    if (_.isValidBrowserUrl(url)) {
      return _.getUrlExtension(url)?.toLocaleLowerCase() === "svg";
    }
    return false;
  }
  public static isJsonString = (str: string): boolean => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  public static cleanSvgCode = (svgCode: string): string => {
    return svgCode.replace(/<\?xml[^>]*>/g, "");
  };
  public static generateDaysBetweenDates = (
    startDate: Date | Moment,
    endDate: Date | Moment,
    format: string = "DD MMM YYYY"
  ): string[] => {
    const dateArray = [];
    let currentDate = moment(startDate);
    while (currentDate.isBefore(endDate)) {
      dateArray.push(moment(currentDate).format(format));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  };
  public static getMonthEndDate = (date: Date | Moment): Date => {
    return moment(date).endOf("month").toDate();
  };
  public static getAgo = (date: Date | Moment): string => {
    return moment(date).fromNow();
  };
  public static getAge = (date: Date | Moment | string) => {
    if (moment(date, "YYYYMMDD").fromNow() === "Invalid date") {
      return "";
    }
    return moment(date, "YYYYMMDD").fromNow();
  };
}
export const openPlatformMaps = (lat, lng) => {
  var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
  var url = scheme + `${lat},${lng}`;
  Linking.openURL(url);
};
