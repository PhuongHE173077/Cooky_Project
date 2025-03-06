import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Dùng icon thư viện
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const naviagter = useNavigation()
  return (
    <View style={styles.card} onClick={() => naviagter.navigate("ProductDetail", { product })}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.size}>{product.size}, Price</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#eee",
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },
  size: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#27ae60",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductCard;
