
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import Entypo from '@expo/vector-icons/Entypo'
import Search from '../Search/Search'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'

export default function ShoppingHeader() {
  const router = useRouter()
  const cart = useSelector((state: any) => state.cart.cart)
  return (
    <View>
      <View style={{ height: 120, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 20, marginTop: 20 }}>
        <View style={{ alignItems: 'center', gap: 10 }}>
          <Image source={require('../../assets/images/cooky-logo.jpg')} style={{ width: 80, height: 80, borderRadius: 99 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Entypo name="shop" size={24} color={'#00b894'} />
            <Text
              style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                color: Colors.PRIMARY,
                fontStyle: 'italic'
              }}
            >Cooky Shop </Text>
          </View>
        </View>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
      }}>
        <Search />

        <TouchableOpacity style={{
          position: 'relative',
        }}
          onPress={() => router.push('/cart/ShoppingCart')}
        >
          <Feather name='shopping-cart' size={25} style={{ marginTop: 10 }} />
          <Text style={{ position: 'absolute', top: -5, right: -12, backgroundColor: Colors.PRIMARY, padding: 4, paddingHorizontal: 7, borderRadius: 99, fontSize: 12, color: Colors.WHITE }}>{cart?.shoppingCart?.length}</Text>
        </TouchableOpacity>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({})