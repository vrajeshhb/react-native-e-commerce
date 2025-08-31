// app/register.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import RegisterScreen from "../src/screens/RegisterScreen";
export default function Register() {
  const router = useRouter();
  const fnGetStarted = () => {
    router.push("/login");
  };
  return (
    <>
      <RegisterScreen fnGetStarted={fnGetStarted} />
    </>
  );
}

const styles = StyleSheet.create({});
