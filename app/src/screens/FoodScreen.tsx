import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SearchScreen } from '../components/Foods/SearchScreen';
import { FilterScreen } from '../components/Foods/FilterScreen';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from '../components/ProductCard';
const Stack = createNativeStackNavigator();
interface item {
  _id: string,
  name: string,
  image: string,
  description: string,
  rating: number,
  price: number
}

export const FoodScreen = () => {
  const [products, setProducts] = useState<item[]>(
    [
      {
        _id: '1',
        name: 'Golden Mango Twist 1',
        image: '',
        description: '',
        rating: 0,
        price: 0
      },
      {
        _id: '2',
        name: 'Golden Mango Twist 2',
        image: '',
        description: '',
        rating: 0,
        price: 0
      },
      {
        _id: '3',
        name: 'Golden Mango Twist 3',
        image: '',
        description: '',
        rating: 0,
        price: 0
      },
      {
        _id: '4',
        name: 'Golden Mango Twist 4',
        image: '',
        description: '',
        rating: 0,
        price: 0
      },
      {
        _id: '5',
        name: 'Golden Mango Twist 5',
        image: '',
        description: '',
        rating: 0,
        price: 0
      }
    ])
  return (
    <View>
      <SearchScreen navigation='' />
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard product={item} onAddToCart={() => { }} />}
        columnWrapperStyle={styles.row}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
