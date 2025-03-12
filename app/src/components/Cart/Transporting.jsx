import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { fetchCartByUserIdAPIs } from '../../apis';
import { NotFound } from './NotFound';

const products = [
  { id: '1', name: 'Bell Pepper Red', price: 4.99, image: 'https://res.cloudinary.com/dl3ucqngx/image/upload/v1739524596/pngfuel_6_dz5nbr.png', quantity: 1, unit: '1kg' },
  { id: '2', name: 'Egg Chicken Red', price: 1.99, image: 'https://res.cloudinary.com/dl3ucqngx/image/upload/v1739524596/pngfuel_6_dz5nbr.png', quantity: 1, unit: '4pcs' },
  { id: '3', name: 'Organic Bananas', price: 3.00, image: 'https://res.cloudinary.com/dl3ucqngx/image/upload/v1739524596/pngfuel_6_dz5nbr.png', quantity: 1, unit: '12oz' },
  { id: '4', name: 'Ginger', price: 2.99, image: 'https://res.cloudinary.com/dl3ucqngx/image/upload/v1739524596/pngfuel_6_dz5nbr.png', quantity: 1, unit: '250g' },
];

export const Transporting = () => {
  const [carts, setCarts] = useState([])


  useEffect(() => {
    fetchCartByUserIdAPIs()
      .then(res => {
        setCarts(res)
      })
  }, [])




  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item?.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.unit}>{item?.unit}</Text>
        <Text style={styles.price}>${item?.price?.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}> 1 </Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => {/* Add remove logic here */ }}>
        <Text style={styles.removeButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    carts && carts?.shoppingCart && carts?.shoppingCart?.length > 0 ?
      <>
        <View style={styles.container}>
          <FlatList
            data={carts?.shoppingCart}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.checkoutText}>Go to Checkout ($100)</Text>
          </TouchableOpacity>
        </View>
      </> :
      <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }}>

        <NotFound />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  unit: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantity: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 12,
    fontWeight: 'bold',
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  removeButtonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
