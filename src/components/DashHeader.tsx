import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Text, TextInput, useTheme, Badge } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DashHeader() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <Appbar.Header
        style={{
          backgroundColor: "white",
          elevation: 0,
        }}
      >
        {/* Title */}
        <Appbar.Content
          title="Viorra"
          style={{ alignItems: "flex-start" }}
          titleStyle={{
            color: theme.colors.btnBg,
            fontFamily: "Italiana-Regular",
            fontSize: 32,
            fontWeight: "600",
            marginRight: 20,
            // marginLeft: -35,
          }}
        />

        {/* Notification Icon with Badge */}
        <View style={{ marginRight: 20 }}>
          <Icon name="bell-outline" size={26} color="#333" />
          <Badge
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              backgroundColor: theme.colors.btnBg,
            }}
            size={8}
          />
        </View>

        {/* Cart Icon */}
        <Appbar.Action
          icon={() => <Icon name="shopping-outline" size={26} color="#333" />}
          style={{ marginRight: 20 }}
        />
      </Appbar.Header>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          placeholder="Search for all products"
          left={<TextInput.Icon icon="magnify" />}
          style={[styles.searchInput, { marginBottom: 20 }]}
          outlineStyle={styles.searchOutline}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: -8,
    marginBottom: 8,

    paddinBottom: 90,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 48,
  },
  searchOutline: {
    borderRadius: 50,
  },
});
