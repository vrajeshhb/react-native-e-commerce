import { useTheme } from "react-native-paper";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Text, Divider } from "react-native-paper";
import CustomText from "../components/CustomText";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../components/CustomButton";
const LoginScreen = ({ handleregister, handledashboard }) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={[{ backgroundColor: theme.colors.mainBG }, styles.container]}>
      {/* <Text>LoginScreen</Text> */}
      <TextInput
        label="Enter your email Id"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        right={<TextInput.Icon icon="email-outline" />}
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotWrapper}>
        <CustomText
          varients="registerTxt"
          title="Forgot password"
          style={[
            styles.forgotText,
            {
              color: theme.colors.btnBg,
              textDecorationLine: "underline", // 👈 underline
              textDecorationStyle: "solid",
              textDecorationColor: theme.colors.btnBg,
            },
          ]}
        />
      </TouchableOpacity>

      <CustomButton
        title="Log In"
        onPress={() => handledashboard()}
        style={[styles.loginBtn, { marginBottom: 20 }]}
        labelStyle={styles.loginLabel}
      />

      {/* Divider */}
      <View style={styles.dividerRow}>
        <Divider style={styles.divider} />
        <Text style={styles.dividerText}>Or Continue With</Text>
        <Divider style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="google" size={28} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="apple" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="facebook" size={28} color="#1877F2" />
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <View style={styles.registerWrapper}>
        <Text>Not a Member?</Text>
        <TouchableOpacity onPress={() => handleregister()}>
          <CustomText
            varients="registerTxt"
            title=" Register Now"
            style={{ color: theme.colors.btnBg }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    marginBottom: 12,
    backgroundColor: "white",
  },
  forgotWrapper: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#B84953",
    fontSize: 14,
  },
  loginBtn: {
    marginVertical: 10,
    paddingVertical: 8,
  },
  loginLabel: {
    fontSize: 16,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 8,
    color: "#777",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  socialIcon: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 10,
    elevation: 2,
  },
  registerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
