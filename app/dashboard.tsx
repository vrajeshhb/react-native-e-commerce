import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, Text, useTheme, Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardScreen from "../src/screens/User/DashboardScreen";
import DashHeader from "../src/components/DashHeader";
import ProfileScreen from "../src/screens/User/ProfileScreen";
import CustomText from "../src/components/CustomText";
import { useRouter } from "expo-router";

function HomeRoute() {
  const theme = useTheme();

  return (
    <>
      <DashHeader />
      {/* <TouchableOpacity onPress={() => handledetails()}>
        <Text>Clickable</Text>
      </TouchableOpacity> */}
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.mainBG,
        }}
      >
        <DashboardScreen />
      </View>
    </>
  );
}

function ProfileRoute() {
  const theme = useTheme();
  return <ProfileScreen />;
}

function OffersRoute() {
  const theme = useTheme();
  return (
    <>
      <DashHeader />
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.mainBG,
        }}
      >
        <CustomText
          varients="subtxtonboarding"
          title="No Active Offers Yet ..."
          style={{
            paddingTop: 30,
            marginBottom: 20,
            color: theme.colors.activeColor,
            fontFamily: "Italiana-Bold",
          }}
        />
      </View>
    </>
  );
}

function WishlistRoute() {
  const theme = useTheme();
  return (
    <>
      <DashHeader />
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.mainBG,
        }}
      >
        <CustomText
          varients="subtxtonboarding"
          title="OOPS! No Data To Display here..."
          style={{
            paddingTop: 30,
            marginBottom: 20,
            color: theme.colors.activeColor,
            fontFamily: "Italiana-Bold",
          }}
        />
      </View>
    </>
  );
}

export default function Dashboard() {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home-variant",
      unfocusedIcon: "home-variant-outline",
    },
    {
      key: "offers",
      title: "Offers",
      focusedIcon: "tag",
      unfocusedIcon: "tag-outline",
    },
    {
      key: "wishlist",
      title: "Wishlist",
      focusedIcon: "cards-heart",
      unfocusedIcon: "cards-heart-outline",
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    offers: OffersRoute,
    wishlist: WishlistRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={theme.colors.btnBg}
      inactiveColor="#000"
      barStyle={{
        backgroundColor: theme.colors.cardColor,
        borderTopWidth: 1,
        borderTopColor: "black",
      }}
      shifting={false}
      labelStyle={{
        fontFamily: "Italiana-Bold",
        fontSize: 12,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
