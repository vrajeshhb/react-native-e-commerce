import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import CustomText from "../components/CustomText";
const AuthHeader = ({ aaptitle, onBackPress }: AuthHeaderProps) => {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.mainBG }}>
      <View
        style={{
          backgroundColor: theme.colors.screenHeaderBg,
          paddingTop: 100,
          paddingBottom: 20,
          justifyContent: "center",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        {aaptitle === "Login" ? (
          <>
            <CustomText
              varients="loginHeader"
              title="Hello Again !"
              style={{
                textAlign: "center",
                paddingTop: 10,
                color: theme.colors.btnBg,
              }}
            />

            <CustomText
              varients="loginHeaderSubTxt"
              title=" Welcome Back you've been missed"
              style={{
                textAlign: "center",
                color: theme.colors.btnBg,
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 10,
              }}
            />
          </>
        ) : (
          <CustomText
            varients="loginHeader"
            title="Join the Glow !"
            style={{
              textAlign: "center",
              paddingTop: 10,
              paddingBottom: 15,
              color: theme.colors.btnBg,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({});
