import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import { useRouter } from 'expo-router'
import { useDispatch } from 'react-redux'
import { TYPE_UPDATE_CART } from '@/src/services/Constant'
import { addCart } from '@/src/redux/cartSlice'

export default function ProductCard({ product }: any) {

  const router = useRouter()
  const dispatch = useDispatch()

  const handAddCard = () => {

    const data = {
      productId: product._id,
      image: product.image,
      name: product.name,
      price: product.price,
      unit: product.unit,
      quantity: 1
    }
    const optionCart = TYPE_UPDATE_CART.ADD_ITEM_CART
    dispatch(addCart({ data, optionCart }))
  }

  return (
    <View

      style={{
        // padding: 10,
      }}
    >
      <View style={{
        backgroundColor: Colors.WHITE,
        borderWidth: 0.2,
        marginLeft: 20,
        borderColor: '#E2E2E2',
        borderRadius: 10,

        height: 248.51,
        width: 173.32,
      }}>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 120
        }}
          onPress={() => router.push({
            pathname: '/product/productDetail',
            params: { product: JSON.stringify(product) }
          })}
        >
          <Image source={{ uri: product.image }} style={{ width: 100, height: 80, borderRadius: 10 }} />

        </TouchableOpacity>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontFamily: 'semibold',
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >{product.name}</Text>

          <Text
            style={{
              fontFamily: '181725',
              color: Colors.GRAY,
              fontSize: 12
            }}
          >
            7pcs
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'space-between', marginTop: 7 }}>
            <Text
              style={{
                fontFamily: 'semibold',

                fontSize: 18,
                fontWeight: 'bold',
              }}
            >$ {product.price}</Text>
            <TouchableOpacity onPress={() => handAddCard(product)}>
              <Text
                style={{
                  fontFamily: 'outfit-bold',
                  fontSize: 17,
                  color: Colors.WHITE,
                  backgroundColor: Colors.PRIMARY,
                  padding: 10,
                  paddingHorizontal: 15,
                  borderRadius: 15

                }}
              >+</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({})