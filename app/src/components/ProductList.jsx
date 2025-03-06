import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';



export default function ProductList({ products }) {
  const onAddToCart = (product) => {
    console.log("🚀 ~ onAddToCart ~ product:", product)
  }
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} onAddToCart={onAddToCart} />}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
