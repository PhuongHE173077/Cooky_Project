import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/services/Colors'

export default function ProductCard({ product }: any) {
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
        height: 220,
        width: 150,
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 120
        }}>
          <Image source={{ uri: product.image }} style={{ width: 100, height: 80, borderRadius: 10 }} />

        </View>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontFamily: 'semibold',
              fontSize: 14,
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
                fontSize: 17,
                fontWeight: 'bold',
              }}
            >$ 444</Text>
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
          </View>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({})