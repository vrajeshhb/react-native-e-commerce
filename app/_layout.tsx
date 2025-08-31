import { Stack } from "expo-router";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "../app.json";
import { MD3LightTheme as DefaultTheme, Button } from "react-native-paper";
import App from "./src/App";
import { useFonts } from "expo-font";
import AuthHeader from "../src/components/AuthHeader";
const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: "#BADA55",
    onBoardingBg: "#C9A7A2",
    btnBg: "#B84953",
    screenHeaderBg: "#F1B0B0",
    screenHeaderFont: "#AD7373",
    cardColor: "#FFFFFF",
    mainBG: "#FCEDE9",
  },
  fonts: {
    ...DefaultTheme.fonts, // keep defaults for fallbacks
    // 👇 custom font families mapped to variants
    bodyLarge: {
      ...DefaultTheme.fonts.bodyLarge,
      fontFamily: "BeVietnamPro-ExtraLight",
    },
    bodyLargeBold: {
      ...DefaultTheme.fonts.bodyLarge,
      fontFamily: "BeVietnamPro-ExtraBold",
    },
    bodyMedium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontFamily: "BeVietnamPro-ExtraLight",
    },
    bodySmall: {
      ...DefaultTheme.fonts.bodySmall,
      fontFamily: "BeVietnamPro-ExtraLight",
    },
    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: "Italiana-Regular",
    },
    titleLargeBold: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: "Italiana-Bold",
    },
    titleMedium: {
      ...DefaultTheme.fonts.titleMedium,
      fontFamily: "Italiana-Regular",
    },
    titleSmall: {
      ...DefaultTheme.fonts.titleSmall,
      fontFamily: "Italiana-Regular",
    },
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "BeVietnamPro-ExtraLight": require("../assets/fonts/BeVietnamPro-ExtraLight.ttf"),
    "Italiana-Regular": require("../assets/fonts/Italiana-Regular.ttf"),
  });
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }} // 👈 hide header
        />
        <Stack.Screen
          name="login"
          options={{ title: "Login" }}
          options={{
            headerShown: true,
            header: () => <AuthHeader aaptitle="Login" />,
          }}
        />
        <Stack.Screen
          name="register"
          options={{ title: "Register" }}
          options={{
            headerShown: true,
            header: () => <AuthHeader aaptitle="register" />,
          }}
        />
        <Stack.Screen
          name="dashboard"
          options={{
            headerShown: false, // hide header since we use BottomNavigation
          }}
        />
        <Stack.Screen
          name="details"
          options={{
            headerShown: false, // hide header since we use BottomNavigation
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
