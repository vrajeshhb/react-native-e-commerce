import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import { Text, useTheme, ActivityIndicator, Card } from "react-native-paper";
import ProductCard from "../../components/ProductCard";
import DashHeader from "../../components/DashHeader";

const DashboardScreen = ({ handledetails }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <ProductCard
      title={item.title}
      price={item.price}
      image={item.thumbnail}
      onPressFavorite={() => console.log("Added to wishlist!")}
      items={item}
      handledetails={handledetails}
    />
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <>
      <View style={{ borderTopWidth: 1, borderTopColor: "black" }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2} // ✅ grid layout
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            padding: 15,
          }}
        />
      </View>
    </>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
