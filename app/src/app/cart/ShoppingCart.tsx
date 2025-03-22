import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '@/src/redux/cartSlice'

export default function ShoppingCart() {
  const currentCart = useSelector((state: any) => state.cart.cart)
  console.log("🚀 ~ ShoppingCart ~ currentCart:", currentCart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [])

  return (
    <View >
      <Text>ShoppingCart</Text>
    </View>
  )
}

const styles = StyleSheet.create({})