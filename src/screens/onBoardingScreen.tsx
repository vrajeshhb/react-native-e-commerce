import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { withTheme, ProgressBar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Bg from "../../assets/images/onboardRemoved.png";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
const onBoardingScreen = ({ theme, fnGetStarted }) => {
  const [progress, setProgress] = useState(0.3); // 30% filled
  const router = useRouter();
  const handlePress = () => {
    // Increase progress on tap (reset when full)
    setProgress((prev) => (prev >= 1 ? 0 : prev + 0.1));
  };

  const handleLogin = () => {
    fnGetStarted();
  };
  return (
    <LinearGradient
      colors={["#EFCFCB", "#E8BEB9"]}
      style={styles.gradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ImageBackground
        source={Bg} // replace with your image
        style={styles.container}
        resizeMode="contain"
      >
        <View style={styles.overlay}></View>
        <ProgressBar
          progress={progress} // value between 0 and 1
          color="#B84953" // custom color
          style={styles.progressBar}
        />
        <CustomText
          varients="titleOnBoarding"
          title="Viorra"
          style={{
            paddingTop: 50,
            marginTop: 20,
            marginBottom: 4,
            color: theme.colors.cardColor,
          }}
        />
        <CustomText
          varients="subtxtonboarding"
          title="Your Beauty, Delivered."
          style={{
            paddingTop: 10,
            marginBottom: 20,
            color: theme.colors.cardColor,
          }}
        />
        <CustomButton
          title="Get Started"
          onPress={() => handleLogin()}
          style={{ marginBottom: 20 }}
        />
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
          <View style={styles.progressBackground}>
            <View style={[styles.progressFill, { flex: progress }]} />
            <View style={{ flex: 1 - progress }} />
          </View>
          {/* <ProgressBar
            progress={progress} // value between 0 and 1
            color="#FFF" // custom color
            style={[styles.progressBar, { marginBottom: 20 }]}
          /> */}
        </TouchableOpacity>
      </ImageBackground>
    </LinearGradient>
  );
};

export default withTheme(onBoardingScreen);

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // fill the screen
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // push content to bottom
    alignItems: "center",
  },
  overlay: {
    alignItems: "center",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressBackground: {
    flexDirection: "row",
    width: 100,
    height: 10,
    backgroundColor: "#C9A7A2", // background (light brown like your image)
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 50,
  },
  progressFill: {
    backgroundColor: "#FCEDE9", // fill color (off-white like your image)
    borderRadius: 10,
  },
});
