import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import { Card, Text, IconButton, useTheme } from "react-native-paper";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 24; // two cards per row with margin

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  onPressFavorite?: () => void;
}

export default function ProductCard({
  title,
  price,
  image,
  onPressFavorite,
  items,
}: ProductCardProps) {
  const theme = useTheme();
  const router = useRouter();

  const handleDetails = (item: any) => {
    router.push({
      pathname: "/details",
      params: {
        ...item,
        dimensions: JSON.stringify(item.dimensions),
        reviews: JSON.stringify(item.reviews),
        meta: JSON.stringify(item.meta),
      },
    });
  };

  return (
    <>
      <TouchableOpacity onPress={() => handleDetails(items)}>
        <Card style={styles.card} mode="elevated">
          {/* {item && <Text>was sent not empty... </Text>} */}

          <View style={styles.contentWrapper}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.footer}>
              <View style={{ flex: 1 }}>
                <Text
                  numberOfLines={1}
                  style={[styles.title, { color: theme.colors.onSurface }]}
                >
                  {title}
                </Text>
                <Text
                  style={[
                    styles.price,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                >
                  ${price}
                </Text>
              </View>

              <IconButton
                icon="heart-outline"
                size={20}
                onPress={onPressFavorite}
                iconColor={theme.colors.onSurface}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  contentWrapper: {
    borderRadius: 16,
    overflow: "hidden", // ✅ now safe here
  },
  image: {
    width: "100%",
    height: 140,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  title: {
    fontFamily: "Italiana-Bold",
    fontSize: 14,
  },
  price: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "600",
  },
});
