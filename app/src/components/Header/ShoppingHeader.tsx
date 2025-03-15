import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import Entypo from '@expo/vector-icons/Entypo'

export default function ShoppingHeader() {
  return (
    <View style={{ height: 120, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 20 }}>
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
  )
}

const styles = StyleSheet.create({})