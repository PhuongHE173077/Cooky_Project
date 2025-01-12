import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3dU2YNn01QVCNDI5FLgsU0vBgwp_sSJx0Q&s' }}
        style={styles.image}
      />
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {/* Add your functionality here */ }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#F36C24',
    borderRadius: 20,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24, // Increased font size for a larger "+"
  },
});
