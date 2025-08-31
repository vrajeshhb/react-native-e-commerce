import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {
  Card,
  IconButton,
  useTheme,
  Button,
  Text,
  Icon,
} from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";

const DetailScreen = () => {
  const theme = useTheme();
  const items = useLocalSearchParams();
  const dimensions = items.dimensions
    ? JSON.parse(items.dimensions as string)
    : null;
  const reviews = items.reviews ? JSON.parse(items.reviews as string) : null;
  //console.log("Depth:", dimensions?.depth);
  const router = useRouter();

  //console.log(JSON.stringify(reviews));
  // render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon
            key={i}
            source={i <= rating ? "star" : "star-outline"}
            size={18}
            color="black"
          />
        ))}
      </View>
    );
  };
  const renderItem = ({ item }: any) => (
    <View style={styles.cardrevi}>
      {/* Placeholder profile image */}
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={styles.avatarrevi}
      />

      <View style={{ flex: 1 }}>
        <View style={styles.headerRowrevi}>
          <View>
            <Text style={styles.namerevi}>{item.reviewerName}</Text>
            <Text style={styles.emailrevi}>{item.reviewerEmail}</Text>
          </View>
          {renderStars(item.rating)}
        </View>
        <Text style={styles.commentrevi}>{item.comment}</Text>
      </View>
    </View>
  );

  const discountedPrice = (
    items.price -
    (items.price * items.discountPercentage) / 100
  ).toFixed(2);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.mainBG }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Card
            style={[styles.card, { marginTop: 90 }]}
            mode="elevated"
            theme={{ roundness: 16 }}
          >
            {/* Top Image */}
            <View style={styles.imageWrapper}>
              <Image source={{ uri: items.images }} style={styles.image} />

              {/* Top left back button */}
              <IconButton
                icon="arrow-left"
                size={22}
                mode="contained-tonal"
                style={styles.topLeftBtn}
                containerColor="#fff"
                onPress={() => router.back()}
              />

              {/* Top right favorite / share */}
              <IconButton
                icon="shopping-outline"
                size={22}
                mode="contained-tonal"
                style={styles.topRightBtn}
                containerColor="#fff"
                onPress={() => console.log("Wishlist")}
              />
            </View>
          </Card>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 0,
              margin: 20,
            }}
          >
            <Button
              mode="outlined"
              onPress={() => {}}
              textColor={theme.colors.btnBg}
              style={[
                {
                  borderWidth: 1,
                  borderRadius: 30, // pill style
                },
                { borderColor: theme.colors.btnBg },
              ]}
            >
              View Similar
            </Button>

            {/* Share Icon */}
            <IconButton
              icon="share-variant"
              size={22}
              iconColor="#444"
              onPress={() => {}}
            />
          </View>
          {/*
        
        
        part 2 
        
        
        
        */}
          <View style={{ marginLeft: 20, marginRigth: 20 }}>
            <Text
              style={{
                fontFamily: "BeVietnamPro-ExtraBold",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              {items.title}
            </Text>
            <Text
              style={{
                fontFamily: "BeVietnamPro-ExtraLight",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              {items.description}
            </Text>

            <View style={styles.ratingRow}>
              {[1, 2, 3, 4, 5].map((i) => {
                let iconName: string;
                if (items.rating >= i) {
                  iconName = "star"; // full star
                } else if (items.rating >= i - 0.5) {
                  iconName = "star-half"; // half star
                } else {
                  iconName = "star-outline"; // empty star
                }
                return (
                  <Icon key={i} source={iconName} size={20} color="#000" />
                );
              })}

              <Text style={styles.ratingText}>
                {parseFloat(items.rating).toFixed(2)}/5
              </Text>
            </View>
            <View style={styles.divider} />
            <Text
              style={{ marginTop: 5, fontFamily: "BeVietnamPro-ExtraLight" }}
            >
              Sold By - {items.brand}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
            }}
          >
            <View>
              <Text style={styles.currentPrice}>
                ${items.discountPercentage}
              </Text>
              <Text style={styles.oldPrice}>${items.price}</Text>
            </View>

            <Button
              mode="contained"
              style={[
                styles.addButton,
                { backgroundColor: theme.colors.btnBg },
              ]}
            >
              Add to Bag
            </Button>
          </View>

          {/*HIGLIGHT CMP STARTS HERE*/}
          <View style={styles.highlightsContainer}>
            <Text style={styles.highlightsTitle}>Highlights</Text>

            <View style={styles.highlightsRow}>
              {/* Left Column */}
              <View style={styles.highlightColumn}>
                <Text style={styles.highlightLabel}>Width</Text>
                <Text style={styles.highlightValue}>{dimensions?.width}</Text>

                <Text style={[styles.highlightLabel, { marginTop: 12 }]}>
                  Warranty
                </Text>
                <Text style={styles.highlightValue}>
                  {items.warrantyInformation}
                </Text>
              </View>

              {/* Divider */}
              <View style={styles.divider} />

              {/* Right Column */}
              <View style={styles.highlightColumn}>
                <Text style={styles.highlightLabel}>Height</Text>
                <Text style={styles.highlightValue}>{dimensions?.height}</Text>

                <Text style={[styles.highlightLabel, { marginTop: 12 }]}>
                  Shipping
                </Text>
                <Text style={styles.highlightValue}>
                  {items.shippingInformation}
                </Text>
              </View>
            </View>

            {/* Extra row for Depth */}
            <View style={[styles.highlightsRow, { marginTop: 16 }]}>
              <View style={styles.highlightColumn}>
                <Text style={styles.highlightLabel}>Depth</Text>
                <Text style={styles.highlightValue}>{dimensions?.depth}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.highlightColumn}>
                <Text style={styles.highlightLabel}>Availibility</Text>
                <Text style={styles.highlightValue}>
                  {items.availabilityStatus}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 16 }}>
            <Text style={styles.titlerevi}>Ratings & Reviews</Text>
            <FlatList
              data={reviews}
              keyExtractor={(_, i) => i.toString()}
              renderItem={renderItem}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 20,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 280,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topLeftBtn: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  topRightBtn: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  ratingText: {
    marginLeft: 6,
    fontWeight: "600",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginTop: 6,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  oldPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  highlightsContainer: {
    marginLeft: 20,
    marginRight: 20,
    padding: 16,
    backgroundColor: "#fdecea", // light pink bg
    borderRadius: 8,
  },
  highlightsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#000",
  },
  highlightsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  highlightColumn: {
    flex: 1,
  },
  highlightLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  highlightValue: {
    fontSize: 14,
    color: "#444",
  },
  divider: {
    width: 1,
    backgroundColor: "#999",
    marginHorizontal: 12,
  },

  titlerevi: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  cardrevi: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarrevi: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerRowrevi: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  namerevi: {
    fontWeight: "600",
    fontSize: 14,
  },
  emailrevi: {
    fontSize: 12,
    color: "gray",
  },
  commentrevi: {
    marginTop: 6,
    fontSize: 14,
    color: "#333",
  },
});
