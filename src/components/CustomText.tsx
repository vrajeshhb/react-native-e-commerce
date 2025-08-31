import { StyleSheet } from "react-native";
import { Text, withTheme } from "react-native-paper";

import React from "react";

const CustomText = ({ title, varients, style, theme }) => {
  return <Text style={[styles[varients], style]}>{title}</Text>;
};

export default withTheme(CustomText);

const styles = StyleSheet.create({
  titleOnBoarding: {
    fontFamily: "Italiana-Regular",
    fontSize: 42,
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 60,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: "center",
  },
  subtxtonboarding: {
    fontFamily: "bodyLarge",
    fontWeight: "300",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: "center",
  },
  loginHeader: {
    fontFamily: "Italiana-Bold",
    fontWeight: "600",
    fontSize: 38,
    lineHeight: 34,
    letterSpacing: 0.02 * 34,
    textAlign: "center",
  },
  loginHeaderSubTxt: {
    fontFamily: "BeVietnamPro-ExtraLight",
    fontWeight: "600",
    fontSize: 26,
    lineHeight: 34,
    letterSpacing: 0.02 * 34,
  },
  registerTxt: {
    fontWeight: "800",
  },
});
