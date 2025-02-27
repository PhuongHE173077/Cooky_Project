import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchScreen } from '../../components/Foods/SearchScreen';
import ProductCard from '../../components/ProductCard';
import { fetchAllProductsAPIs } from '../../apis';
const Stack = createNativeStackNavigator();


export const FoodScreen = () => {
  const [products, setProducts] = useState(
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

  useEffect(() => {
    fetchAllProductsAPIs()
      .then(res => {
        console.log(res);

        setProducts(res)
      })
  }, [])
  return (
    <ScrollView>
      <SearchScreen navigation='' />
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard product={item} onAddToCart={() => { }} />}
        columnWrapperStyle={styles.row}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
