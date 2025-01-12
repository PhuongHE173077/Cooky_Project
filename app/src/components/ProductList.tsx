import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  { id: '1', name: 'Golden Mango Twist', image: '', price: '$4.5' },
  { id: '2', name: 'Fruit Magic Tart', image: '', price: '$5.2' },
];

export default function ProductList() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
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
