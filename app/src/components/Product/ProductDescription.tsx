import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'
import { AntDesign } from '@expo/vector-icons'

export default function ProductDescription() {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ borderTopWidth: 0.2, borderColor: Colors.GRAY, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'semibold' }}>Product description</Text>
          <AntDesign name='down' size={20} color='black' />
        </View>
        <Text style={{ fontSize: 16, fontFamily: 'semibold', marginTop: 10, color: Colors.GRAY }}>
          Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
        </Text>
      </View>

      <View style={{ borderTopWidth: 0.2, borderColor: Colors.GRAY, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'semibold' }}>Nutritions</Text>
          <AntDesign name='down' size={20} color='black' />
        </View>
        <Text style={{ fontSize: 16, fontFamily: 'semibold', marginTop: 10, color: Colors.GRAY }}>
          helo1234
        </Text>
      </View>

      <View style={{ borderTopWidth: 0.2, borderColor: Colors.GRAY, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'semibold' }}>Review</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <AntDesign name='star' size={20} color='red' />
            <AntDesign name='star' size={20} color='red' />
            <AntDesign name='star' size={20} color='red' />
            <AntDesign name='star' size={20} color='red' />
            <AntDesign name='star' size={20} color='red' />
            <AntDesign name='down' size={20} color='black' />
          </View>

        </View>
        <Text style={{ fontSize: 16, fontFamily: 'semibold', marginTop: 10, color: Colors.GRAY }}>
          helo1234
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})