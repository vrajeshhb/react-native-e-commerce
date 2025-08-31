// app/register.tsx
import { Text, TextInput, useTheme, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

export default function RegisterScreen({ fnGetStarted }) {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.mainBG }]}>
      <TextInput
        mode="outlined"
        placeholder="Full Name"
        style={styles.input}
        outlineColor="#ddd"
        activeOutlineColor={theme.colors.btnBg || "#B84953"}
      />

      <TextInput
        mode="outlined"
        placeholder="Email Address"
        style={styles.input}
        outlineColor="#ddd"
        activeOutlineColor={theme.colors.btnBg || "#B84953"}
        right={
          <TextInput.Icon
            icon={() => <Icon name="email-outline" size={22} color="#888" />}
          />
        }
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        secureTextEntry={!showPassword}
        style={styles.input}
        outlineColor="#ddd"
        activeOutlineColor={theme.colors.btnBg || "#B84953"}
        right={
          <TextInput.Icon
            icon={() => (
              <Icon
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#888"
                onPress={() => setShowPassword(!showPassword)}
              />
            )}
          />
        }
      />
      <TextInput
        mode="outlined"
        placeholder="Confirm Password"
        secureTextEntry={!showConfirmPassword}
        style={styles.input}
        outlineColor="#ddd"
        activeOutlineColor={theme.colors.btnBg || "#B84953"}
        right={
          <TextInput.Icon
            icon={() => (
              <Icon
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#888"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          />
        }
      />
      <CustomButton
        title="Create Account"
        onPress={() => console.log("Login pressed")}
        style={[styles.button, { marginBottom: 20 }]}
        labelStyle={styles.loginLabel}
      />

      {/* Register Link */}
      <View style={styles.registerWrapper}>
        <Text>Already a Member !</Text>
        <TouchableOpacity onPress={() => fnGetStarted()}>
          <CustomText
            varients="registerTxt"
            title=" Login Here"
            style={{ color: theme.colors.btnBg }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEDE9",
    justifyContent: "center",
    padding: 20,
    paddingTop: 5,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    marginTop: 40,
    paddingVertical: 6,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    elevation: 3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  loginLink: {
    color: "#B84953",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  registerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
