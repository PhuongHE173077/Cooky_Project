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
    carts && carts?.shopingCart && carts?.shopingCart?.length > 0 ?
      <>
        <View style={styles.container}>
          <FlatList
            data={carts?.shopingCart}
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
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  unit: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  price: {
    fontSize: 14,
    color: '#2ecc71',
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#333',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#f0f0f0',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  removeButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});