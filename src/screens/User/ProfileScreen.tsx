import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Avatar,
  Text,
  Card,
  List,
  useTheme,
  IconButton,
} from "react-native-paper";

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.mainBG }]}
      contentContainerStyle={{ padding: 16, paddingTop: 100 }}
    >
      {/* Header */}
      <Text style={[styles.header, { fontFamily: "bodyLarge" }]}>Profile</Text>

      {/* Profile Card */}
      <Card
        style={[
          styles.profileCard,
          { backgroundColor: theme.colors.cardColor },
        ]}
        mode="elevated"
      >
        <View style={styles.profileRow}>
          <Avatar.Image
            size={50}
            source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Olivia</Text>
            <Text style={styles.email}>Oliva@gmail.com</Text>
          </View>
          <IconButton icon="pencil-outline" onPress={() => {}} />
        </View>
      </Card>

      {/* First Group */}
      <Card
        style={[
          styles.sectionCard,
          { backgroundColor: theme.colors.cardColor },
        ]}
        mode="elevated"
      >
        <List.Item
          title="Address"
          description="Manage your saved address"
          left={(props) => <List.Icon {...props} icon="map-marker-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
        <List.Item
          title="Order History"
          description="View your past orders"
          left={(props) => <List.Icon {...props} icon="history" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
        <List.Item
          title="Language"
          left={(props) => <List.Icon {...props} icon="translate" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
        <List.Item
          title="Notifications"
          left={(props) => <List.Icon {...props} icon="bell-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {}}
        />
      </Card>

      {/* Second Group */}
      <Card
        style={[
          styles.sectionCard,
          { backgroundColor: theme.colors.cardColor },
        ]}
        mode="elevated"
      >
        <List.Item
          title="Contact Us"
          left={(props) => <List.Icon {...props} icon="account-box-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Get Help"
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Privacy Policy"
          left={(props) => <List.Icon {...props} icon="shield-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Terms and Conditions"
          left={(props) => <List.Icon {...props} icon="cog-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </Card>

      {/* Logout */}
      <List.Item
        title="Log Out"
        titleStyle={{ color: theme.colors.error, fontWeight: "600" }}
        left={(props) => (
          <List.Icon {...props} icon="logout" color={theme.colors.error} />
        )}
        onPress={() => console.log("Logged out")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 100,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  profileCard: {
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
  },
  sectionCard: {
    borderRadius: 16,
    marginBottom: 20,
  },
});
