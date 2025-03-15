import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { fetchAllProductAPIs } from '@/src/apis'
import ProductCard from '../Card/ProductCard'
import { Colors } from '@/src/services/Colors'

export default function ExclusiveOffer({ products }: any) {


  return (
    <View style={{ padding: 20, paddingHorizontal: 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Text
          style={{
            fontFamily: 'semibold',
            fontSize: 24,
            color: '#181725',
            fontWeight: 'bold'
          }}
        >Exclusive Offer</Text>
        <Text
          style={{
            fontFamily: 'semibold',
            fontSize: 16,
            color: '#53B175'
          }}
        >
          See all
        </Text>
      </View>


      <FlatList
        style={{ marginTop: 10, paddingHorizontal: 0 }}
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: any) => (
          <View style={{ flex: 1 }}>
            <ProductCard product={item} />
          </View>

        )}

      />
    </View>
  )
}

const styles = StyleSheet.create({})