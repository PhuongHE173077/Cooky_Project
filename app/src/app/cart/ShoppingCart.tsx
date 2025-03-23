import { ActivityIndicator, FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, updateQuanityCart } from '@/src/redux/cartSlice'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Button from '@/src/components/Button/Button'
import { TYPE_UPDATE_CART, TYPE_UPDATE_QUANTITY_CART } from '@/src/services/Constant'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import { Colors } from '@/src/services/Colors'
import { paymentAPIs } from '@/src/apis'
export default function ShoppingCart() {
  const currentCart = useSelector((state: any) => state.cart.cart)
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const dispatch = useDispatch();
  const [view, setView] = useState(false)
  const [payUrl, setUrl] = useState('')
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch])

  const handleUpdateQuantity = (item: any, type: string) => {

    if (!item || !item.productId || (item.quantity <= 1 && type === TYPE_UPDATE_QUANTITY_CART.DECREASE_QUANTITY_CART)) return;
    dispatch(updateQuanityCart({ itemId: item.productId, type }))
  }

  const handlePlaceOrder = async () => {
    await paymentAPIs().then(res => {
      Linking.openURL(res.payUrl)
    })
  }
  return (

    <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>

      <FlatList
        data={currentCart?.shoppingCart}
        renderItem={({ item, index }) => (
          <View key={index} style={{ padding: 20, borderBottomWidth: 0.2, borderColor: '#E2E2E2', display: 'flex', flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: 120, height: 80 }} />
            </View>
            <View style={{ width: '70%' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontFamily: 'semibold', fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <TouchableOpacity onPress={() => handleUpdateQuantity(item, TYPE_UPDATE_CART.DELETE_ITEM_CART)}>
                  <Ionicons name='close' size={20} color={'gray'} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'semibold', fontWeight: 'bold', color: 'gray' }}>
                  {item.unit},price
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                  <TouchableOpacity onPress={() => handleUpdateQuantity(item, TYPE_UPDATE_QUANTITY_CART.DECREASE_QUANTITY_CART)}>
                    <Text style={{ fontSize: 24, borderWidth: 0.2, borderColor: 'gray', padding: 5, paddingHorizontal: 15, borderRadius: 7 }}>
                      -
                    </Text>
                  </TouchableOpacity>

                  <Text style={{ fontSize: 24, borderColor: 'gray' }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity onPress={() => handleUpdateQuantity(item, TYPE_UPDATE_QUANTITY_CART.INCREASE_QUANTITY_CART)}>
                    <Text style={{ fontSize: 24, borderWidth: 0.2, borderColor: 'gray', padding: 5, paddingHorizontal: 15, borderRadius: 7, color: 'green' }} >
                      +
                    </Text>
                  </TouchableOpacity>

                </View>
                <View>
                  <Text style={{ fontSize: 24, fontFamily: 'semibold', fontWeight: 'bold', marginRight: 10 }}>
                    ${item.price * item.quantity}
                  </Text>
                </View>
              </View>

            </View>

          </View>
        )}
      />

      <View style={{
        padding: 20,
        width: '100%',
      }}>

        <Button
          lable={`checkout( ${currentCart.shoppingCart.reduce((total, item) => total + item.quantity * item.price, 0)} $)`}
          onPress={() => actionSheetRef.current?.show()} icon='cart' loading={false} />

      </View>
      <ActionSheet ref={actionSheetRef}>
        <View >
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>Checkout</Text>
            <Ionicons name='close' size={20} />
          </View>

          <View style={{ borderBottomWidth: 0.2, borderColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 16, fontFamily: 'outfit', color: 'gray' }}>Delivery</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontFamily: 'outfit' }}>Select Method</Text>
              <Ionicons name='chevron-forward' size={20} />
            </View>
          </View>

          <View style={{ borderBottomWidth: 0.2, borderColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 16, fontFamily: 'outfit', color: 'gray' }}>Pament</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name='cc-mastercard' size={20} color={Colors.PRIMARY} />
              <Ionicons name='chevron-forward' size={20} />
            </View>
          </View>
          <View style={{ borderBottomWidth: 0.2, borderColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 16, fontFamily: 'outfit', color: 'gray' }}>Promo Code </Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontFamily: 'outfit' }}>Pick discount</Text>
              <Ionicons name='chevron-forward' size={20} />
            </View>
          </View>
          <View style={{ borderBottomWidth: 0.2, borderColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 16, fontFamily: 'outfit', color: 'gray' }}>Total Cost  </Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontFamily: 'outfit' }}>${currentCart.shoppingCart.reduce((total, item) => total + item.quantity * item.price, 0)} </Text>
              <Ionicons name='chevron-forward' size={20} />
            </View>
          </View>

          <View style={{
            padding: 20,
            width: '100%',
          }}>

            <Button
              lable={`Place Order`}
              onPress={() => handlePlaceOrder()} icon='cart' loading={false} />

          </View>


        </View>

      </ActionSheet>



    </View >
  )
}

const styles = StyleSheet.create({})