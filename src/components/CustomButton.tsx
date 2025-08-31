import * as React from "react";
import { Button, withTheme } from "react-native-paper";

const CustomButton = ({ title, theme, style, onPress }) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={[
      {
        backgroundColor: theme.colors.btnBg,
        fontSize: 32,
        fontFamily: "Italiana-Regular", // 👈 must match the key you passed to useFonts
        fontWeight: "700", // 300 = light weight
        fontStyle: "normal",
        borderRadius: 25,
      },
      style,
    ]}
  >
    {title}
  </Button>
);

export default withTheme(CustomButton);
