// app/login.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import LoginScreen from "../src/screens/LoginScreen";
export default function Login() {
  const router = useRouter();

  const handleregister = () => {
    router.push("/register");
  };
  const handledashboard = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <LoginScreen
        handleregister={handleregister}
        handledashboard={handledashboard}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { marginBottom: 20, textAlign: "center" },
  input: { marginBottom: 15 },
  button: { marginTop: 10 },
});
